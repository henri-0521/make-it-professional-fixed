import { useState } from "react";

export default function App() {
  const [editing, setEditing] = useState(false);
  const [info, setInfo] = useState({
    name: "Mc Henry F. Angala",
    position: "Owner, Macky-Print",
    phone: "+63 912 345 6789",
    email: "mchenry@email.com",
    website: "https://mackyprint.com",
    facebook: "mackyprintph",
    profileImage: "https://via.placeholder.com/100"
  });

  const handleChange = (field, value) => {
    setInfo({ ...info, [field]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInfo({ ...info, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-700 via-pink-400 to-yellow-400 flex items-center justify-center p-4">
      <div className="max-w-sm w-full p-6 bg-white rounded-2xl shadow-2xl text-center">
        <img
          src="/macky-logo.jpg"
          alt="Macky-Print Logo"
          className="mx-auto mb-4 w-28 h-28 object-contain"
        />
        <img
          src={info.profileImage}
          alt="Profile"
          className="mx-auto mb-4 rounded-full w-24 h-24 object-cover border-4 border-pink-500"
        />
        {editing ? (
          <>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-2" />
            <input value={info.name} onChange={(e) => handleChange("name", e.target.value)} className="mb-2" />
            <input value={info.position} onChange={(e) => handleChange("position", e.target.value)} className="mb-2" />
            <input value={info.phone} onChange={(e) => handleChange("phone", e.target.value)} className="mb-2" />
            <input value={info.email} onChange={(e) => handleChange("email", e.target.value)} className="mb-2" />
            <input value={info.website} onChange={(e) => handleChange("website", e.target.value)} className="mb-2" />
            <input value={info.facebook} onChange={(e) => handleChange("facebook", e.target.value)} className="mb-4" />
            <button onClick={() => setEditing(false)}>Save</button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-gray-800">{info.name}</h2>
            <p className="text-sm text-gray-600">{info.position}</p>
            <div className="mt-4 text-left text-sm text-gray-700">
              <p><strong>Phone:</strong> {info.phone}</p>
              <p><strong>Email:</strong> {info.email}</p>
              <p><strong>Website:</strong> <a href={info.website} className="text-blue-600 underline">{info.website}</a></p>
              <p><strong>Facebook:</strong> {info.facebook}</p>
            </div>
            <button className="mt-4" onClick={() => setEditing(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
}
