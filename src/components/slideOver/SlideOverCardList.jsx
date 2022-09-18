import Card from "../main/Card";
import List from "../main/List";
import SlideOverCardListSection from "./SlideOverCardListSection";
import { useData } from "../../data/data.jsx";
import { useState } from "react";

export default function SlideOverCardList(props) {
  const data = useData();

  const [cards, setCards] = useState([]);

  if (data.data)
    return (
      <div>
        <SlideOverCardListSection title={"Tasks"}>
          {data.data.map((section) =>
            section.lists.map((list) =>
              list.cards.map((card, i) => (
                <Card
                  key={i}
                  _id={card._id}
                  title={card.title}
                  due={card.due}
                  type={card.type}
                  done={card.done}
                  parent_name={section.title + " • " + list.title}
                  parent_id={list._id}
                ></Card>
              ))
            )
          )}
        </SlideOverCardListSection>

        <SlideOverCardListSection title={"Assignments"}>
          {data.data.map((section) =>
            section.lists.map((list, i) => (
              <List
                key={i}
                _id={list._id}
                title={list.title}
                due={list.due}
                done={list.done}
                parent_name={section.title}
                parent_id={section._id}
                inSlideOver
              />
            ))
          )}
        </SlideOverCardListSection>
      </div>
    );
}

// {/*<SlideOverCardListSection title="Overdue">*/}
// {/*  <Card*/}
// {/*    title="Front-end"*/}
// {/*    type="note"*/}
// {/*    due="2022-07-10T00:00:00.000Z"*/}
// {/*    parent={"Example assignment" + " • " + "Further Web Programming"}*/}
// {/*    overdue*/}
// {/*  >*/}
// {/*    Learn how to use TailwindCSS at tailwindcss.com*/}
// {/*  </Card>*/}
//
// {/*  <Card*/}
// {/*    title="To dos"*/}
// {/*    type="checklist"*/}
// {/*    due="2022-07-10T00:00:00.000Z"*/}
// {/*    parent={"Example assignment" + " • " + "Further Web Programming"}*/}
// {/*    overdue*/}
// {/*  >*/}
// {/*    <Checklist checked>Finish front-end</Checklist>*/}
// {/*    <Checklist>Implement back-end</Checklist>*/}
// {/*    <Checklist>Write API</Checklist>*/}
// {/*    <Checklist>Test user input</Checklist>*/}
// {/*  </Card>*/}
//
// {/*  <List*/}
// {/*    title="Take home assignment"*/}
// {/*    parent="Further Web Programming"*/}
// {/*    inSlideOver*/}
// {/*    done*/}
// {/*  ></List>*/}
// {/*</SlideOverCardListSection>*/}
//
// {/*<SlideOverCardListSection title="Up next">*/}
// {/*  <SlideOverCardListBlock dateCountdown="Test">*/}
// {/*    <List*/}
// {/*      title="Take home assignment"*/}
// {/*      parent="Further Web Programming"*/}
// {/*      inSlideOver*/}
// {/*      due="2022-07-10T00:00:00.000Z"*/}
// {/*    ></List>*/}
//
// {/*    <Card*/}
// {/*      title="Front-end"*/}
// {/*      type="note"*/}
// {/*      due="2022-07-10T00:00:00.000Z"*/}
// {/*      parent={"Example assignment" + " • " + "Further Web Programming"}*/}
// {/*    >*/}
// {/*      Learn how to use TailwindCSS at tailwindcss.com*/}
// {/*    </Card>*/}
//
// {/*    <Card*/}
// {/*      title="Back end and a lot of tasks related to back-end to make the app work well"*/}
// {/*      type="note"*/}
// {/*      due="2022-07-10T00:00:00.000Z"*/}
// {/*      parent={"Example assignment" + " • " + "Further Web Programming"}*/}
// {/*    >*/}
// {/*      Implement MongoDB*/}
// {/*    </Card>*/}
//
// {/*    <Card*/}
// {/*      title="To dos"*/}
// {/*      type="checklist"*/}
// {/*      due="2022-07-10T00:00:00.000Z"*/}
// {/*      parent={"Example assignment" + " • " + "Further Web Programming"}*/}
// {/*    >*/}
// {/*      <Checklist checked>Finish front-end</Checklist>*/}
// {/*      <Checklist>Implement back-end</Checklist>*/}
// {/*      <Checklist>Write API</Checklist>*/}
// {/*      <Checklist>Test user input</Checklist>*/}
// {/*    </Card>*/}
// {/*  </SlideOverCardListBlock>*/}
//
// {/*  <SlideOverCardListBlock dateCountdown="Test">*/}
// {/*    <List*/}
// {/*      title="Take home assignment"*/}
// {/*      parent="Further Web Programming"*/}
// {/*      inSlideOver*/}
// {/*      due="2022-07-10T00:00:00.000Z"*/}
// {/*    ></List>*/}
//
// {/*    <Card*/}
// {/*      title="Front-end"*/}
// {/*      type="note"*/}
// {/*      due="2022-07-10T00:00:00.000Z"*/}
// {/*      parent={"Example assignment" + " • " + "Further Web Programming"}*/}
// {/*    >*/}
// {/*      Learn how to use TailwindCSS at tailwindcss.com*/}
// {/*    </Card>*/}
//
// {/*    <Card*/}
// {/*      title="Back end and a lot of tasks related to back-end to make the app work well"*/}
// {/*      type="note"*/}
// {/*      due="2022-07-10T00:00:00.000Z"*/}
// {/*      parent={"Example assignment" + " • " + "Further Web Programming"}*/}
// {/*    >*/}
// {/*      Implement MongoDB*/}
// {/*    </Card>*/}
//
// {/*    <Card*/}
// {/*      title="To dos"*/}
// {/*      type="checklist"*/}
// {/*      due="2022-07-10T00:00:00.000Z"*/}
// {/*      parent={"Example assignment" + " • " + "Further Web Programming"}*/}
// {/*    >*/}
// {/*      <Checklist checked>Finish front-end</Checklist>*/}
// {/*      <Checklist>Implement back-end</Checklist>*/}
// {/*      <Checklist>Write API</Checklist>*/}
// {/*      <Checklist>Test user input</Checklist>*/}
// {/*    </Card>*/}
// {/*  </SlideOverCardListBlock>*/}
// {/*</SlideOverCardListSection>*/}
