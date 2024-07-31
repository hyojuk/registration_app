import SteinStore from 'stein-js-client';
import Constants from '../constants';

const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5d3fb20987c49c04cac13693"
);

function writeToDatabase(parentInfo, student, prepareStudent) {
    let registration = {...parentInfo, ...student};
    writeRegistration(registration, () => {
        // TODO: Use better confirmation dialog.
        if (!window.confirm("추가 등록할 학생이 있습니까? (Do you need to enter an additional strudent?)")) {
            window.location.href = '/confirmation';
        } else {
            console.log("I have additional student.");
            // let user to re-enter student
            prepareStudent();
        }
    });
}

function writeRegistration(registration, postFunction) {
    store.append(Constants.dbYear, [registration], 
    {
        authentication: { username: Constants.username, password: Constants.auth }
    })
    .then(res => {
        postFunction();
    }).catch(err => {
        console.log(err);
        window.location.href = '/about';
    });
}

async function searchDatabase(email) {
    // console.log("em: " + email);
    return await store.read(Constants.previousDbYear,     
    {
        authentication: { username: Constants.username, password: Constants.auth },
        search: { email: email }
    })
    .then(data => {
        // console.log("Found " + data.length + " student(s): ");
        // data.forEach(element => {
        //     console.log(element.engName);
        // });
        // console.log(" Would you like to re-register them?");
        return data;
      }).catch(err => {
        console.log(err);
    });
}

export default {writeToDatabase, searchDatabase, writeRegistration};