import Card from "../main/Card";
import List from "../main/List";
import Checklist from "../inputs/Checklist";
import SlideOverCardListSection from "./SlideOverCardListSection";
import SlideOverCardListBlock from "./SlideOverCardListBlock";

export default function SlideOverCardList(props) {
  return (
    <div>
      <SlideOverCardListSection title="Overdue">
        <Card
          title="Front-end"
          type="note"
          due="2022-07-10T00:00:00.000Z"
          parent={"Example assignment" + " • " + "Further Web Programming"}
          overdue
        >
          Learn how to use TailwindCSS at tailwindcss.com
        </Card>

        <Card
          title="To dos"
          type="checklist"
          due="2022-07-10T00:00:00.000Z"
          parent={"Example assignment" + " • " + "Further Web Programming"}
          overdue
        >
          <Checklist checked>Finish front-end</Checklist>
          <Checklist>Implement back-end</Checklist>
          <Checklist>Write API</Checklist>
          <Checklist>Test user input</Checklist>
        </Card>

        <List
          title="Take home assignment"
          parent="Further Web Programming"
          inSlideOver
          done
        ></List>
      </SlideOverCardListSection>

      <SlideOverCardListSection title="Up next">
        <SlideOverCardListBlock dateCountdown="Test">
          <List
            title="Take home assignment"
            parent="Further Web Programming"
            inSlideOver
            due="2022-07-10T00:00:00.000Z"
          ></List>

          <Card
            title="Front-end"
            type="note"
            due="2022-07-10T00:00:00.000Z"
            parent={"Example assignment" + " • " + "Further Web Programming"}
          >
            Learn how to use TailwindCSS at tailwindcss.com
          </Card>

          <Card
            title="Back end and a lot of tasks related to back-end to make the app work well"
            type="note"
            due="2022-07-10T00:00:00.000Z"
            parent={"Example assignment" + " • " + "Further Web Programming"}
          >
            Implement MongoDB
          </Card>

          <Card
            title="To dos"
            type="checklist"
            due="2022-07-10T00:00:00.000Z"
            parent={"Example assignment" + " • " + "Further Web Programming"}
          >
            <Checklist checked>Finish front-end</Checklist>
            <Checklist>Implement back-end</Checklist>
            <Checklist>Write API</Checklist>
            <Checklist>Test user input</Checklist>
          </Card>
        </SlideOverCardListBlock>

        <SlideOverCardListBlock dateCountdown="Test">
          <List
            title="Take home assignment"
            parent="Further Web Programming"
            inSlideOver
            due="2022-07-10T00:00:00.000Z"
          ></List>

          <Card
            title="Front-end"
            type="note"
            due="2022-07-10T00:00:00.000Z"
            parent={"Example assignment" + " • " + "Further Web Programming"}
          >
            Learn how to use TailwindCSS at tailwindcss.com
          </Card>

          <Card
            title="Back end and a lot of tasks related to back-end to make the app work well"
            type="note"
            due="2022-07-10T00:00:00.000Z"
            parent={"Example assignment" + " • " + "Further Web Programming"}
          >
            Implement MongoDB
          </Card>

          <Card
            title="To dos"
            type="checklist"
            due="2022-07-10T00:00:00.000Z"
            parent={"Example assignment" + " • " + "Further Web Programming"}
          >
            <Checklist checked>Finish front-end</Checklist>
            <Checklist>Implement back-end</Checklist>
            <Checklist>Write API</Checklist>
            <Checklist>Test user input</Checklist>
          </Card>
        </SlideOverCardListBlock>
      </SlideOverCardListSection>
    </div>
  );
}
