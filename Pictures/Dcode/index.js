/* Basic Selector

title text changed */
let title = document.getElementById("title");
title.innerHTML = "Smith Family Reunion";

// family-member class added to .member elements
let allMemberElement = document.querySelectorAll(".member");
allMemberElement.forEach(element => {
    element.classList.add("family-member");
});

// active navigation item selected
let activeNavItem = document.querySelector(".active");

/* Parent/Child relationship

immediate parent from the data-name="you"
*/
let you = document.querySelector('[data-name="you"]');
let parent = you.parentElement; //dad
console.log(parent) //dad;

// the oldest living ancestor from the cousin element
function findOldestAncestor(element){
    while(element.parentElement){
        element = element.parentElement;
    }
    return element;
}

let cousin = document.querySelector('[data-name="cousin"]');
let grandpa = findOldestAncestor(cousin);
console.log("the oldest living ancestor is:", grandpa);

// all direct children from the middle generation
let middleGeneration = document.querySelector('[data-generation="middle"]');

let directChildren = middleGeneration.children;
// directChildren = Array.from(directChildren);
console.log("all direct children from the middle generation:", directChildren);


/* Sibling navigation

 from "you" element find your sister and add 'highlight' class to her
 */
let sister = parent.querySelector('[data-name="sister"]');
if(sister){
    sister.classList.add('highlight');
}
console.log("sister from 'you' element",sister);

// aunt, a sibling branch of "dad"
let dad = document.querySelector('[data-name="dad"]');
let aunt = dad.nextElementSibling;
console.log("next sibling branch of dad: ie aunt",aunt);

// previous sibling of contact 'nav'
let navItem = document.querySelectorAll(".nav-item");
let contact = navItem[2];
let prevSibling = contact.previousElementSibling;
console.log("this is the previous sibling of contact 'nav':",prevSibling);

/* Attribute-Based Traversal

all elements with data-generation="young" and double their fontsize
*/
let youngDataGen = document.querySelectorAll('[data-generation="young"]');
youngDataGen.forEach(element =>{
    let oldSize = window.getComputedStyle(element).fontSize;
    let newSize = parseFloat(oldSize) * 2 + "px";
    element.style.fontSize = newSize;
});

// from "aunt" get elements data-name attribute and log their values

let auntElement = document.querySelector('[data-name="aunt"]');
let nameElements = aunt.querySelectorAll('[data-name]');
nameElements.forEach(element => {
    console.log(element.getAttribute('data-name'));
});

// from the cousin element find the closest ancestor container with class "container"
closestAncestor = cousin.closest('.container');
console.log(closestAncestor);

// Dynamic Elements

let addMemberBtn = document.querySelector('#add-member');
let youngGen = document.querySelector('[data-generation="young"]');

function AddNewMember(){
    if(!youngGen) return;
    
    let newMember = document.createElement("div");
    newMember.classList.add("member");
    newMember.textContent = "New Young Member";

    youngGen.append(newMember);

    updateMemberColors();
}

function updateMemberColors(){
    document.querySelectorAll(".member").forEach( member => {
        let parentGeneration = member.closest('[data-generation]');

        if(parentGeneration){
            let generation = parentGeneration.getAttribute("data-generation");

            if(generation === "old"){
                member.style.color = "brown";
            }
            else if(generation === "middle"){
                member.style.color = "blue";
            }
            else if(generation === "young"){
                member.style.color = "green";
            }
        }
    });
}

addMemberBtn.addEventListener("click", AddNewMember);
updateMemberColors();

// complex traversal challenge
let allMembers = document.querySelectorAll(".members");

function FindMembersWithChildren(){
    let membersWithChildren = [];
    allMembers.forEach(member => {
        if(member.querySelector(".member")){
            membersWithChildren.push(member);
        }
    });
    console.log("members with children:",membersWithChildren);
    return membersWithChildren;
}
FindMembersWithChildren();

    
function createBreadcrumbTrail() {
    let breadcrumb = [];
    let currentMember = document.querySelector('[data-name="you"]'); // Start from "you"

    while (currentMember) {
        let name = currentMember.getAttribute("data-name"); // Get name
        breadcrumb.unshift(name); // Add to the beginning

        // Move up to the nearest parent .member (excluding itself)
        let parentMember = currentMember.parentElement.closest('.member');

        // If no more parents exist, break the loop
        if (!parentMember) break;

        currentMember = parentMember;
    }

    let breadcrumbTrail = breadcrumb.join(" → "); // Format breadcrumb
    console.log("Breadcrumb Trail:", breadcrumbTrail);
    return breadcrumbTrail;
}

// Call the function
createBreadcrumbTrail();



function findLeafNodes() {
    let leafNodes = [];

    document.querySelectorAll(".member").forEach(member => {
        // If this member does NOT contain another .member inside, it's a leaf node
        if (!member.querySelector(".member")) {
            leafNodes.push(member);
        }
    });

    console.log("Leaf Nodes (Members Without Children):", leafNodes);
    return leafNodes;
}

// Call the function
findLeafNodes();

function locateFamilyMember(memberName) {
    // Find the member element by data-name
    let member = document.querySelector(`[data-name="${memberName}"]`);

    if (!member) {
        console.error(`No member found with the name "${memberName}"`);
        return;
    }

    // **Find Relatives in the Same Generation**
    let parentGeneration = member.closest("[data-generation]");
    let generation = parentGeneration ? parentGeneration.getAttribute("data-generation") : null;

    if (!generation) {
        console.error(`Generation not found for "${memberName}"`);
        return;
    }

    let sameGenerationMembers = document.querySelectorAll(`[data-generation="${generation}"]`);
    sameGenerationMembers.forEach(m => m.classList.add("highlight-generation")); // Highlight same-gen members

    // **Highlight Path to Family Root**
    let currentMember = member;
    while (currentMember) {
        currentMember.classList.add("highlight-path");
        currentMember = currentMember.parentElement.closest(".member"); // Move up
    }

    console.log(`Located: ${memberName}`);
    console.log(`Same Generation Members:`, sameGenerationMembers);
}

// Example Usage
locateFamilyMember("you"); // Call with the name of the member



