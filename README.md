# The E-commerse store

Welome to the ASUS e-commerse store. Built using React.js, Typescript & Styled Components, the store includes a sleek and responsive UI with some cool features. Have a play around and enjoy.

## CONTENTS

- Features
- Skills covered
- Challenges
- Future Implementations

## FEATURES

- add to cart
- remove from cart
- increase and decrease item quantity
- shopping bag: open/close animation, close off-menu click
- bag icon quantity display

## KEY SKILLS COVERED

- React-router-dom: multiple routes (pages) inside application, and linking routes between eachother
- UseContext(): State management, excellent for keeping the code clean and readable.
- More React Hooks: useState(), useEffect(), useLocation()
- API fetch for the clothes data. 
- Javascript array methods: .find(), .reduce(), .map(), .filter()
- Responsive from mobile through to desktop
- Reusable components: The results component is used on both the Men and Women pages, keeping them both very clean. 
- Object destructuring: select exactly what to import to each component when using useContext().
- Tightly scripted code using typescript.

## TOP CHALLENGE

- Getting to grips with the JS array methods. The biggest head bang was working out how to select an item and add it to the bag. It sounds simple, right? But it involves a fair bit of of work. I invite you to check out the "increaseBagQuantity" function in the ShoppingBagContext file, and see if you can work it out.

## BIGGEST WINS

- Implementing useContext for the first time: it made state management so incredibly simple and tidy. I can't believe I didn't use it sooner!
- React-router-dom: Another amazingly simple tool that enables you to easily implement multiple pages and link between them. Before this, I was conditionally rendering components. Another excellent tool for for the belt. 

## FUTURE IMPLEMENTATIONS

- Create a checkout modal notification
- Add authentication with firebase
- Run some unit tests with jest, and end-to-end tests with cypress
- Find an AIP with more data results, so the page can feel more life-like
  - If not possible, create own data set to answer above challenge.






- style the nav bar for home page and then men's/women's - DONE
- conditionally render the red bag icon (if  quantity === 0 &&) {return null} - DONE
- create results component and then dynamically pass it into the men and womens page - DONE
- set width of items to be exact for men and women - DONE
- Add Local Storage
- Make Mobile Responsive - DONE
- Deploy - DONE https://eshoplw.netlify.app/ 
- Add to Portfolio
- Add to GitHub
- write readme