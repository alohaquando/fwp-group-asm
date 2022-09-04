import format from "date-fns/format";
import Card from "./Card";

export default function List() {
  return (
    <div className="w-[360px] overflow-auto pb-10 mx-4">
      <h2 className="bg-brand-blue-gray-50 text-xl font-semibold pb-4 sticky top-0 z-2">
        Further Web Programming
      </h2>
      <div className="space-y-3 ">
        <div className="flex flex-col bg-opacity-50 bg-white border border-brand-blue-gray-100 overflow-y-scroll rounded-2xl space-y-4 py-5 px-6 w-full">
          <h3 className="text-base font-semibold">List name</h3>
          <Card
            title="This title"
            content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing 12345"
            parent="Assignment Name"
            due={format(new Date(), "d MMM")}
            overdue
          />
        </div>

        <div className="flex flex-col bg-opacity-50 bg-white border border-brand-blue-gray-100 overflow-y-scroll rounded-2xl space-y-4 py-5 px-6 w-full">
          <h3 className="text-base font-semibold">List name</h3>
          <Card
            title="This title"
            content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing 12345"
            parent="Assignment Name"
            due={format(new Date(), "d MMM")}
            overdue
          />
          <Card
            title="This title"
            content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing 12345"
            parent="Assignment Name"
            due={format(new Date(), "d MMM")}
            overdue
          />
        </div>

        <div className="flex flex-col bg-opacity-50 bg-white border border-brand-blue-gray-100 overflow-y-scroll rounded-2xl space-y-4 py-5 px-6 w-full">
          <h3 className="text-base font-semibold">List name</h3>
          <Card
            title="This title"
            content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing 12345"
            parent="Assignment Name"
            due={format(new Date(), "d MMM")}
            overdue
          />
          <Card
            title="This title"
            content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing 12345"
            parent="Assignment Name"
            due={format(new Date(), "d MMM")}
            overdue
          />
        </div>
      </div>
    </div>
  );
}
