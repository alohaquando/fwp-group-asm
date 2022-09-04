import format from "date-fns/format";
import Card from "./Card";

export default function SlideOverCardList() {
  return (
    <div className="flex-1 px-6 space-y-3">
      {/* Overdue Section */}
      <h2 className="font-semibold text-base pt-6">Overdue</h2>
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
        test if this thing can ever break the layout. Testing testing testing
        12345"
        due={format(new Date(), "d MMM")}
        parent="Assignment Name"
        overdue
      />

      {/* Up Next Section */}
      <h2 className="font-semibold text-base pt-6">Up next</h2>

      {/* Per day  */}
      <h3 className="font-medium text-[0.8125rem] pt-2">5 days left</h3>
      <Card
        title="This title"
        content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing 12345"
        parent="Assignment Name"
        due={format(new Date(), "d MMM")}
      />
      <Card
        title="This title"
        content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing
        12345"
        parent="Assignment Name"
        due={format(new Date(), "d MMM")}
      />

      {/* Per day  */}
      <h3 className="font-medium text-[0.8125rem] pt-2">5 days left</h3>
      <Card
        title="This title"
        content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing 12345"
        parent="Assignment Name"
        due={format(new Date(), "d MMM")}
      />
      <Card
        title="This title"
        content="This is a very very long description of the content because I need to
        test if this thing can ever break the layout. Testing testing testing
        12345"
        parent="Assignment Name"
        due={format(new Date(), "d MMM")}
      />
    </div>
  );
}
