import React, {useState, useEffect} from 'react';
import useAuth from '../hooks/useAuth';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw, convertFromHTML } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Write = ({
    pageName,
    firebaseRef,
}) => {
    const [user, loading] = useAuth();
    const [toggle, setToggle] = useState(false); 
    const [editorContent, setEditorContent] = useState(
        EditorState.createEmpty()
    );
    const [HTMLContent, setHTMLContent] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [errorSaving, setErrorSaving] = useState("");
    useEffect(() => {
        firebaseRef.on("value", snap => {
            const firebaseData = snap.val() || { content: "" };
            // console.log(firebaseData);

            const { content } = firebaseData;
            // default editor state to empty
            // console.log(content);
            let editorState = EditorState.createEmpty();
            const { contentBlocks, entityMap } = convertFromHTML(content);

            if (contentBlocks) {
                // boilerplate code to generate the editor state from a string
                // then store it into state
                const contentState = ContentState.createFromBlockArray(
                    contentBlocks,
                    entityMap
                );
                // replace default editor state with actual state
                editorState = EditorState.createWithContent(contentState);
            }
            setEditorContent(editorState);
            setHTMLContent(content);
            //setLoading(false);
        });

        return () => {
            firebaseRef.off();
        };
    }, [pageName]);

    const sendEditorContentToFirebase = async () => {
        try {
            setIsSaving(true);
            let convertedToHtml = draftToHtml(
                convertToRaw(editorContent.getCurrentContent())
            );            
            // console.log(convertedToHtml);
            
            //let lastEditedTime = firebase.database.ServerValue.TIMESTAMP;
            const valueToSet = {
                content: convertedToHtml,
            }
            await firebaseRef.set(valueToSet).then(() => {
                setIsSaving(false);
            });
            setErrorSaving("");
            //setSavedLatestDataToFirebase(true);
        } catch (e) {
            // console.log(e);
            setIsSaving(false);
            setErrorSaving(e.message);
        }
    };
    return (
        <Container>
        {
            user&&user.email === "sakks10@gmail.com" ? 
            <Col>
                <Button variant="outline-warning" disabled={toggle} style={{float:'right'}}
                    onClick={ e => setToggle(!toggle)}>&#9998;</Button>
            </Col>
            : undefined
        }
        { toggle ? 
            <Container> 
                <Editor
                editorState={editorContent}
                onEditorStateChange={e => {
                    // if (savedLatestDataToFirebase) {
                    //     setSavedLatestDataToFirebase(false);
                    // }
                    setEditorContent(e);
                }}
                toolbar={{
                    options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "list",
                        "textAlign",
                        "colorPicker",
                        "link",
                        "embedded",
                        "emoji",
                        "remove",
                        "history"
                    ],
                    }}
                />
                <Button variant="warning" 
                    onClick={ e => {
                    sendEditorContentToFirebase()
                    setToggle(!toggle)}}>
                    {isSaving ? "Saving..." : "Save" }</Button>
                <p>{errorSaving}</p>
            </Container>
            : 
            <Container><div dangerouslySetInnerHTML={{ __html: HTMLContent }} /></Container>
        }
        </Container>
    )
}
 
export default Write;