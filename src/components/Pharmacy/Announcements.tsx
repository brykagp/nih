import React, { useState, useEffect } from "react";

interface Announcement {
  id: number;
  title: string;
  message: string;
  date: string;
}

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/announcements.json")
      .then((res) => res.json())
      .then((data: unknown) => {
        if (Array.isArray(data)) {
          setAnnouncements(data as Announcement[]);
        } else {
          console.error("Invalid data format:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Latest Announcements</h2>

      {/* Display Announcements */}
      {loading ? (
        <p>Loading announcements...</p>
      ) : announcements.length === 0 ? (
        <p>No announcements available.</p>
      ) : (
        <ul className="space-y-4">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="p-4 border rounded-lg bg-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold">{announcement.title}</h3>
              <p className="text-gray-700">{announcement.message}</p>
              <p className="text-sm text-gray-500">{new Date(announcement.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Announcements;
