import React from 'react';

function ToggleView({ view, setView }) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => setView(view === 'row' ? 'card' : 'row')}
    >
      Toggle to {view === 'row' ? 'Card' : 'Row'} View
    </button>
  );
}

export default ToggleView;