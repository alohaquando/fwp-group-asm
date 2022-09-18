import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";
import List from "./List";
import Card from "./Card";
import SectionModal from "../modals/SectionModal.jsx";
import { useState } from "react";
import { useData } from "../../data/data.jsx";

export default function Board() {
  const [modalNewCourseOpen, setModalNewCourseOpen] = useState(false);

  const data = useData();

  if (data.data)
    return (
      <div className="bg-brand-blue-gray-50 min-h-screen min-w-content overscroll-none">
        <div className="fixed inset-y-0 flex max-w-full overflow-x-auto pr-[340px] overscroll-none">
          <div className="pointer-events-auto relative overscroll-none">
            <div className="flex h-full overflow-y-auto pl-4 pt-8">
              {/* Content */}
              {data.data.map((section, i) => (
                <Section
                  key={i}
                  _id={section._id}
                  title={section.title}
                >
                  {section.lists.map((list, i) => (
                    <List
                      key={i}
                      _id={list._id}
                      title={list.title}
                      due={list.due}
                      done={list.done}
                      parent_name={section.name}
                      parent_id={section._id}
                    >
                      {list.cards.map((card, i) => (
                        <Card
                          key={i}
                          _id={card._id}
                          title={card.title}
                          due={card.due}
                          done={card.done}
                          type={card.type}
                          parent_id={list._id}
                        >
                          {card.content}
                        </Card>
                      ))}
                    </List>
                  ))}
                </Section>
              ))}
              {/* End Content */}

              {/* Add button */}
              <button
                onClick={() => setModalNewCourseOpen(!modalNewCourseOpen)}
                className=" flex-1 relative rounded-xl pl-4 text-slate-400 hover:bg-brand-blue-gray-100 w-[360px] text-left transition-all text-xl font-semibold hover:py-2 h-fit"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="mr-3"
                />
                Add course
              </button>
              {/* End Add Button */}
            </div>
          </div>
        </div>

        {/*Modal*/}
        <SectionModal
          openState={modalNewCourseOpen}
          editMode={false}
          onClose={() => setModalNewCourseOpen(!modalNewCourseOpen)}
        />
        {/*End Modal*/}
      </div>
    );
}

// <Section title="Further Web Programming">
//   <List title="Take home assignment">
//     <Card
//         title="Back end and a lot of tasks related to back-end to make the app work well"
//         type="note"
//         due="2022-07-10T00:00:00.000Z"
//         overdue
//     >
//       Implement MongoDB
//     </Card>
//
//     <Card
//         title="To dos"
//         type="checklist"
//         due="2022-07-10T00:00:00.000Z"
//     >
//       <Checklist defaultChecked>Finish front-end</Checklist>
//       <Checklist>Implement back-end</Checklist>
//       <Checklist>Write API</Checklist>
//       <Checklist>Test user input</Checklist>
//     </Card>
//
//     <Card
//         title="Database"
//         type="note"
//         due="2023-07-10T00:00:00.000Z"
//     >
//       Implement
//     </Card>
//   </List>
// </Section>
//
// <Section title="iOS Development">
//   <List
//       title="Take home assignment and many other assignments to finish before break"
//       due="2022-07-10T00:00:00.000Z"
//   >
//     <Card
//         title="Front-end"
//         type="note"
//     >
//       Learn how to use TailwindCSS at tailwindcss.com
//     </Card>
//
//     <Card
//         title="Back end"
//         type="note"
//         due="2022-07-10T00:00:00.000Z"
//     >
//       Implement MongoDB
//     </Card>
//
//     <Card
//         title="To dos"
//         type="checklist"
//         due="2022-07-10T00:00:00.000Z"
//     >
//       <Checklist defaultChecked>
//         Finish front-end and do a lot of related tasks that would
//         make the UI look good
//       </Checklist>
//       <Checklist>Implement back-end</Checklist>
//       <Checklist>Write API</Checklist>
//       <Checklist>Test user input</Checklist>
//     </Card>
//
//     <Card
//         title="Database"
//         type="note"
//         due="Sep 9"
//         done
//     >
//       Implement
//     </Card>
//   </List>
//   <List title="Take home assignment">
//     <Card
//         title="Front-end"
//         type="note"
//     >
//       Learn how to use TailwindCSS at tailwindcss.com
//     </Card>
//
//     <Card
//         title="Back end"
//         type="note"
//         due="2022-07-10T00:00:00.000Z"
//     >
//       Implement MongoDB
//     </Card>
//
//     <Card
//         title="To dos"
//         type="checklist"
//         due="2022-07-10T00:00:00.000Z"
//     >
//       <Checklist defaultChecked>Finish front-end</Checklist>
//       <Checklist>Implement back-end</Checklist>
//       <Checklist>Write API</Checklist>
//       <Checklist>Test user input</Checklist>
//     </Card>
//
//     <Card
//         title="Database"
//         type="note"
//         due="Sep 9"
//         done
//     >
//       Implement
//     </Card>
//   </List>
// </Section>
//
// <Section title="Android Developement">
//   <List
//       title="Learn Flutter to make a pretty app that plays music"
//       done
//   >
//     <Card
//         title="Front-end"
//         type="note"
//     >
//       Learn how to use TailwindCSS at tailwindcss.com
//     </Card>
//
//     <Card
//         title="Back end"
//         type="note"
//         due="2022-07-10T00:00:00.000Z"
//     >
//       Implement MongoDB
//     </Card>
//
//     <Card
//         title="To dos"
//         type="checklist"
//         due="2022-07-10T00:00:00.000Z"
//     >
//       <Checklist defaultChecked>Finish front-end</Checklist>
//       <Checklist>Implement back-end</Checklist>
//       <Checklist>Write API</Checklist>
//       <Checklist>Test user input</Checklist>
//     </Card>
//
//     <Card
//         title="Database"
//         type="note"
//         due="Sep 9"
//         done
//     >
//       Implement
//     </Card>
//   </List>
// </Section>
//
// <Section title="UI/UX Design and Human Computer Interaction (UI/UX + HCI)" />
