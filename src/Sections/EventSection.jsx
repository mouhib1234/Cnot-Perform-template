import { eventsData } from "../constants";

const EventSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-20">
      {eventsData.map((event, index) => (
        <div
          key={index}
          className="relative w-full max-w-md rounded-2xl overflow-hidden card-wrapper"
        >
          <div className="w-full h-56">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5 flex items-start gap-6">
            <div>
              <span className="block text-xs font-semibold text-pink-400">
                {event.date.month}
              </span>
              <span className="text-xl font-semibold">{event.date.day}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white leading-tight">
                {event.title}
              </h3>

              <p className="text-sm text-neutral-400 mt-2">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventSection;
