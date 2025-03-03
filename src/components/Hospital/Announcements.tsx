


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
  const [newTitle, setNewTitle] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");

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

  // Function to add a new announcement
  const addAnnouncement = () => {
    if (!newTitle.trim() || !newMessage.trim()) {
      alert("Please enter both title and message.");
      return;
    }

    const newAnnouncement: Announcement = {
      id: Math.max(0, ...announcements.map((a) => a.id)) + 1,
      title: newTitle,
      message: newMessage,
      date: new Date().toISOString()
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setNewTitle("");
    setNewMessage("");
  };

  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Latest Announcements</h2>

      {/* Add New Announcement Form */}
      <div className="mb-6 p-4 border rounded-lg bg-gray-100 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Add New Announcement</h3>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded-md"
        />
        <textarea
          placeholder="Message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded-md"
        />
        <button
          onClick={addAnnouncement}
          className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
        >
          Post Announcement
        </button>
      </div>

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
