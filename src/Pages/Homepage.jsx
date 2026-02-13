import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  // Load cities from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cities");
    if (saved) setCities(JSON.parse(saved));
  }, []);

  // Save cities to localStorage when changed
  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const handleAddCity = () => {
    const trimmed = city.trim();
    if (!trimmed || cities.includes(trimmed)) return;
    setCities([...cities, trimmed]);
    setCity("");
  };

  const handleDeleteSelected = () => {
    setCities(cities.filter(c => !selected.includes(c)));
    setSelected([]);
  };

  const handleSelect = (cityName) => {
    setSelected(sel =>
      sel.includes(cityName)
        ? sel.filter(c => c !== cityName)
        : [...sel, cityName]
    );
  };

  const handleCardClick = (cityName) => {
    navigate("/weather", { state: { city: cityName } });
  };

  return (
    <div>
      <h2>Weather Checker</h2>
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button onClick={handleAddCity} style={{ marginLeft: 8 }}>Add City</button>
        {selected.length > 0 && (
          <button onClick={handleDeleteSelected} style={{ marginLeft: 8, background: 'red', color: 'white' }}>
            Delete Selected
          </button>
        )}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {cities.map((c) => (
          <div
            key={c}
            onClick={() => handleCardClick(c)}
            style={{
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 12,
              minWidth: 120,
              background: selected.includes(c) ? '#e0f7fa' : '#fff',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: selected.includes(c) ? '0 0 8px #00bcd4' : 'none',
            }}
          >
            <input
              type="checkbox"
              checked={selected.includes(c)}
              onChange={e => {
                e.stopPropagation();
                handleSelect(c);
              }}
              style={{ position: 'absolute', top: 8, left: 8 }}
              onClick={e => e.stopPropagation()}
            />
            <span style={{ marginLeft: 24 }}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
