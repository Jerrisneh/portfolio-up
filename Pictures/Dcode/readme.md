Tasks (Increasing Difficulty):
Basic Selectors

Change the title text to "Smith Family Reunion" using getElementById

Find all .member elements using querySelectorAll and add 'family-member' class to them

Select the active navigation item using document.querySelector

Parent/Child Relationships

From the "you" element (data-name="you"), find your immediate parent (dad)

From the "cousin" element, find the oldest living ancestor (grandpa)

Find all direct children of the "middle" generation branch

Sibling Navigation

From the "you" element, find your sister and add 'highlight' class to her

Find the next sibling branch of "dad" (should be "aunt")

Select the previous sibling of the "Contact" nav item

Attribute-Based Traversal

Find all elements with data-generation="young" and double their font size

From the "aunt" element, find elements with data-name attribute and log their values

Find the closest ancestor container with class "container" from the "cousin" element

Dynamic Elements

Clicking the "Add New Member" button should:

Add a new child to the "young" generation branch

Ensure new elements can still be properly traversed

Create a function that automatically updates all .member elements' colors based on their generation

Complex Traversal Challenges

Find all members who have children (elements with nested branches)

Create a breadcrumb trail showing the hierarchy from "you" to "grandpa"

Implement a function that returns all leaf nodes (members without children)

Real-World Simulation

Build a family member locator that:

Takes a member name as input

Finds all relatives in the same generation

Highlights the path from the target member to the family root

Handle edge cases (invalid names, members without parents/children)

Key Techniques to Practice:
getElementById, querySelector, querySelectorAll

parentElement, closest(), children, childNodes

nextElementSibling, previousElementSibling

matches(), contains()

Attribute selectors ([data-*])

Node relationships (parentNode, firstChild, lastChild)

Handling dynamic elements and event-driven traversal

Recursive traversal functionsCopy replace the file in program directory
