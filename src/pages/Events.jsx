import { useState } from 'react';
import { motion } from 'framer-motion';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa';
import { events } from '../data/events';
import EventModal from '../components/EventModal';

export default function Events() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedView, setSelectedView] = useState('calendar'); // 'calendar' or 'list'

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const filteredEvents = events.filter(event => 
    isSameMonth(new Date(event.date), currentDate)
  );

  const getEventsForDay = (day) => {
    return events.filter(event => 
      isSameDay(new Date(event.date), day)
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h1 className="text-4xl font-serif text-aegean-800 mb-4">
            Volcanic Island Events
          </h1>
          <p className="text-aegean-600 max-w-2xl mx-auto">
            Discover workshops, exhibitions, and cultural events hosted by Santorini's finest artisans
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setSelectedView('calendar')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedView === 'calendar'
                ? 'bg-aegean-600 text-white'
                : 'bg-aegean-50 text-aegean-600 hover:bg-aegean-100'
            }`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setSelectedView('list')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedView === 'list'
                ? 'bg-aegean-600 text-white'
                : 'bg-aegean-50 text-aegean-600 hover:bg-aegean-100'
            }`}
          >
            List View
          </button>
        </div>

        {selectedView === 'calendar' ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Calendar Header */}
            <div className="p-6 border-b border-aegean-100">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                  className="p-2 hover:bg-aegean-50 rounded-lg transition-colors"
                >
                  <FaChevronLeft className="text-aegean-600" />
                </button>
                <h2 className="text-2xl font-serif text-aegean-800">
                  {format(currentDate, 'MMMM yyyy')}
                </h2>
                <button
                  onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                  className="p-2 hover:bg-aegean-50 rounded-lg transition-colors"
                >
                  <FaChevronRight className="text-aegean-600" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 text-center text-sm font-medium text-aegean-600 border-b border-aegean-100">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="py-3">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 text-sm">
              {daysInMonth.map((day, index) => {
                const dayEvents = getEventsForDay(day);
                return (
                  <div
                    key={day.toString()}
                    className={`min-h-[120px] p-2 border-b border-r border-aegean-100 ${
                      index < 7 ? 'border-t' : ''
                    } ${index % 7 === 0 ? 'border-l' : ''}`}
                  >
                    <div className="font-medium text-aegean-700 mb-1">
                      {format(day, 'd')}
                    </div>
                    <div className="space-y-1">
                      {dayEvents.map(event => (
                        <button
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          className="w-full text-left p-1 text-xs rounded bg-sand-100 
                                   text-sand-800 hover:bg-sand-200 transition-colors
                                   truncate"
                        >
                          {event.title}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredEvents.map(event => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-aegean-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-aegean-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-aegean-600">
                      <div className="flex items-center">
                        <FaClock className="mr-2" />
                        {format(new Date(event.date), 'EEEE, MMMM d, yyyy - h:mm a')}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <FaUser className="mr-2" />
                        {event.host}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="px-4 py-2 bg-aegean-600 text-white rounded-lg
                             hover:bg-aegean-700 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}