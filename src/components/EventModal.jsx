import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaTimes, FaMapMarkerAlt, FaClock, FaUser, FaTicketAlt } from 'react-icons/fa';

export default function EventModal({ event, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-48">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white 
                     rounded-full hover:bg-opacity-70 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-serif text-aegean-800 mb-2">
            {event.title}
          </h2>
          
          <div className="space-y-3 text-aegean-600 mb-6">
            <div className="flex items-center">
              <FaClock className="mr-3" />
              {format(new Date(event.date), 'EEEE, MMMM d, yyyy - h:mm a')}
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3" />
              {event.location}
            </div>
            <div className="flex items-center">
              <FaUser className="mr-3" />
              Hosted by {event.host}
            </div>
            {event.price && (
              <div className="flex items-center">
                <FaTicketAlt className="mr-3" />
                {event.price === 0 ? 'Free' : `€${event.price}`}
              </div>
            )}
          </div>

          <div className="prose max-w-none text-aegean-700">
            <p>{event.description}</p>
            {event.details && (
              <>
                <h3 className="text-xl font-serif text-aegean-800 mt-6 mb-3">
                  Event Details
                </h3>
                <p>{event.details}</p>
              </>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {event.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-sand-100 text-sand-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => window.open(event.registrationLink, '_blank')}
              className="flex-1 bg-aegean-600 text-white py-3 rounded-lg
                       hover:bg-aegean-700 transition-colors"
            >
              Register Now
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-sand-100 text-sand-800 py-3 rounded-lg
                       hover:bg-sand-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}