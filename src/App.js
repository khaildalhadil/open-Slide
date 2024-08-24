import "./index.css";
import { useState } from "react";

const faqs = [
  {
    id: '1',
    num: "01",
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: '2',
    num: "02",
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: '3',
    num: "03",
    title: "Do you ship to countries outside the Oman?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {

  const [targgetId, setTarggetId] = useState(0);

  function toggle(item) {
    if (targgetId === item.id) return setTarggetId(0)
    setTarggetId(item.id)
  }


  return (
    <div className="accordion">
      {faqs.map((item) => {
        return(
        <div key={item.id} className={targgetId === item.id? 'item open_border_green': 'item'} >
          <span className={targgetId === item.id? 'number bold open ': 'number bold'} >{item.num}</span>
          <div >
            <ul class="open__ul" >
              <li onClick={()=> toggle(item) } className={targgetId === item.id? 'bold open btn': 'bold btn'} >{item.title}</li>
              <li className="sup " style={{display: targgetId === item.id? 'block': 'none'}} >{item.text}</li>
            </ul>
          </div>
          <span >{targgetId === item.id? '+': '-'}</span>
        </div>
        );
      })}
    </div>
  );
}
