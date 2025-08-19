"use client";

import { useState, useEffect } from "react";

interface EventItem {
  id: number;
  name: string;
  date: string;
}

export default function EventsPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [events, setEvents] = useState<EventItem[]>([]);
  const [search, setSearch] = useState("");

  // ✅ Bonus: Persist to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("events");
    if (saved) {
      setEvents(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!name || !date) return;

  // 🛑 Prevent past dates
  const today = new Date();
  today.setHours(0, 0, 0, 0); // normalize to midnight
  const selectedDate = new Date(date);

  if (selectedDate < today) {
    alert("🚫 You cannot add past dates!");
    return;
  }

  const newEvent: EventItem = {
    id: Date.now(),
    name,
    date,
  };

  setEvents((prev) => [...prev, newEvent]);
  setName("");
  setDate("");
};


  const handleDelete = (id: number) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center p-6">
  <h1 className="text-3xl font-extrabold mb-6 text-gray-800 flex items-center gap-2">
    🎉 Event Manager
  </h1>

  {/* Form */}
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 mb-6 border border-gray-100"
  >
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Event Name
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-3 py-2 border border-gray-300 text-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        placeholder="Enter event name"
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Date
      </label>
      <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      required
      min={new Date().toISOString().split("T")[0]} // today or future only
      className="w-full px-3 py-2 border border-gray-300 text-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
/>

    </div>

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
    >
      ➕ Add Event
    </button>
  </form>

  {/* Search */}
  <div className="w-full max-w-md mb-4">
    <input
      type="text"
      placeholder="🔍 Search events..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
    />
  </div>

  {/* Events List */}
  <ul className="w-full max-w-md space-y-3">
    {filteredEvents.length === 0 && (
      <li className="text-gray-500 text-center">No events yet.</li>
    )}
    {filteredEvents.map((event) => (
      <li
        key={event.id}
        className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 border border-gray-100 hover:shadow-lg transition"
      >
        <div>
          <p className="font-semibold text-gray-800">{event.name}</p>
          <p className="text-sm text-gray-500">{event.date}</p>
        </div>
        <button
          onClick={() => handleDelete(event.id)}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          ❌ Delete
        </button>
      </li>
    ))}
  </ul>
</div>

  );
}
