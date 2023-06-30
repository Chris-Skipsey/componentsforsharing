import TopBanner from "../components/TopBanner.js";
import Banner2 from "../components/2ndBanner.js";
import Card1 from "../components/Card1.js";
import Card2 from "../components/Card2.js";
import './Home.css';


function Home() {
    return (
        <div className="card1">
        <TopBanner
            aboutthispage="Using Card Components in React.js"
            chatgpt="The below text is copied from ChatGPT. Do not copy from ChatGPT in your real work!"
            smalldescription1="CSS card boxes are a popular and versatile design element used in web development to display content in a visually appealing and organized manner. These boxes serve as containers for various types of information, such as images, text, and buttons, and are commonly utilized in websites, applications, and interfaces.            "
            smalldescription2="One of the defining characteristics of CSS card boxes is their rectangular shape, resembling traditional playing cards. They are typically created using HTML and styled using CSS properties to achieve the desired appearance and layout. The flexibility of CSS allows developers to customize card boxes to match the overall design theme of a website or application.            "
            smalldescription3="CSS card boxes offer a wide range of possibilities for presenting content. They can be used individually to showcase a specific piece of information or grouped together to form grids or carousels, allowing for the presentation of multiple items in a visually pleasing manner. This modular approach makes card boxes ideal for displaying product listings, blog posts, portfolio items, or any other type of content that requires a structured and organized layout.            "
            smalldescription4="The visual appearance of CSS card boxes can be customized to suit various design preferences. Developers can define the dimensions, background color, borders, and shadows of the boxes to create a unique and visually appealing style. Additionally, CSS offers various techniques to enhance interactivity, such as hover effects, transitions, and animations, allowing card boxes to respond dynamically to user actions, resulting in a more engaging user experience.            "
            smalldescription5="Moreover, CSS card boxes are often designed to be responsive, meaning they adapt and adjust their layout based on the screen size and device used to view the content. This responsiveness ensures that the card boxes maintain their visual appeal and functionality across different devices, including desktops, laptops, tablets, and smartphones.            "
            smalldescription6="Overall, CSS card boxes provide a versatile and aesthetically pleasing way to present content on the web. Their modular nature, customization options, and responsiveness make them a popular choice for developers seeking to create visually appealing and user-friendly interfaces. Whether used individually or in combination, CSS card boxes offer an effective means of organizing and showcasing information in a visually appealing and interactive manner.            "
        />
        <Banner2
        Card1="Card 1 Example"
        Card1Desc="How it looks like"
        />
        <Card1
        heading="Test 1"
        me="Card 1 test"
         />
         <Card1
        heading="Test 2"
        me="Card 2 test"
         />

<Card1
        heading="Test 3"
        me="Card 3 test"
         />
         <Card2
         />
        </div>

        
    );
}

export default Home;