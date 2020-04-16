// Practice: Student Components
// Create a new project sub-directory in your workspace/javascript directory.
// Paste the array of student objects above into your JavaScript file.
// Copy the createStudentComponent function into your code.
// Add the following styles to your CSS.
// #container {
//     display: flex;
//     flex-direction: column;
// }

// .pushRight {
//     margin-left: auto;
// }

// .xx-large {
//     font-size: 3em;
// }

// .bordered {
//     border-width: 1px;
//     border-color: goldenrod;
//     border-style: solid;
// }

// .dashed {
//     border-style: dashed;
// }

// .section--padded {
//     padding: 10px;
// }

// .passing {
//     color: green;
// }

// .failing {
//     color: orange;
// }
// Add a container article to your HTML.
// <article id="container"></article>
// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// const createStudentComponent = (name, subject, info) => {
//     return `
//     <div class="student">
//     <h1 class="xx-large passing">Student Name</h1>
//     <section class="bordered dashed section--padded">Subject</section>
//     <aside class="pushRight">Additional information</aside>
// </div>`
// }


// If a student is passing, then the structure should look like the following.

// { <div class="student">
//     <h1 class="xx-large passing">Student Name</h1>
//     <section class="bordered dashed section--padded">Subject</section>
//     <aside class="pushRight">Additional information</aside>
// </div> */}

// const createStudentComponent = (name, subject, info, score) => {
//     if (score >= 60) {
//         return `<div class="student">
//             <h1 class="xx-large">${name}</h1>
//             <section>${subject}</section>
//             <aside>${info}</aside>
//         </div>`
//     } else {
//         return `<div class="student">
//     <h1 class="xx-large failing">${name}</h1>
//     <section class="bordered dashed section--padded">${subject}</section>
//     <aside class="pushRight">${info}</aside>
// </div>`
//     }
// }

// // Challenge: Composition of Smaller Components
const h1 = (text, headingClassName) =>
{
    let createHeading = document.createElement("h1");
    let headingText = document.createTextNode(text);
    createHeading.setAttribute("class", `xx-large ${headingClassName}`)
    createHeading.appendChild(headingText);
    document.body.appendChild(createHeading);
}
const section = (text) =>
{
    let createSection = document.createElement("section");
    let sectionText = document.createTextNode(text);
    createSection.setAttribute("class", "bordered dashed section--padded")
    createSection.appendChild(sectionText);
    document.body.appendChild(createSection);
}
const aside = (text) =>
{
    let createAside = document.createElement("aside");
    let asideText = document.createTextNode(text);
    createAside.setAttribute("class", "pushRight")
    createAside.appendChild(asideText);
    document.body.appendChild(createAside);
}
const createStudentComponent = (student, headingClassName) => {
`
    <div class="student">
        ${h1(student.name, headingClassName)}
        ${section(student.subject)}
        ${aside(student.info)}
    </div>
`
}
for (student of students){
    let studentComponent = ""
    if (student.score >= 60){
        studentComponent = createStudentComponent(student, "passing")
    }
    else{
        studentComponent = createStudentComponent(student, "failing")
    }
}
