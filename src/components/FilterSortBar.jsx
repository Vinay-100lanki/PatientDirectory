import React from 'react';

function FilterSortBar({ filterIssue, setFilterIssue, sortField, setSortField }) {
    return (
        <div className="flex gap-2">
            <select
                className="border rounded p-2"
                value={filterIssue}
                onChange={(e) => setFilterIssue(e.target.value)}
            >
                <option value="">All Issues</option>
                <option value="fever">Fever</option>
                <option value="headache">Headache</option>
                <option value="back pain">Back Pain</option>
                <option value="flu">Flu</option>
                <option value="ear infection">Ear Infection
                </option>
                <option value="sore throat">Sore Throat
                </option>
                <option value="sprained ankle">Sprained Ankle

                </option>
                <option value="rash">Rash</option>
            </select>

            <select
                className="border rounded p-2"
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
            >
                <option value="">No Sorting</option>
                <option value="name">Sort by Name</option>
                <option value="age">Sort by Age</option>
            </select>
        </div>
    );
}

export default FilterSortBar;