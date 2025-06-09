import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PatientCard from './PatientCard';
import PatientRow from './PatientRow';
import SearchBar from './SearchBar';
import ToggleView from './ToggleView';
import FilterSortBar from './FilterSortBar';

function PatientDirectory() {
  const [patients, setPatients] = useState([]);
  const [view, setView] = useState('row');
  const [search, setSearch] = useState('');
  const [filterIssue, setFilterIssue] = useState('');
  const [sortField, setSortField] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://assign.immunefile.com/api/patients', {
        params: { search }
      });
      let data = response.data.data;

      if (filterIssue) {
        data = data.filter(p => p.medical_issue.toLowerCase().includes(filterIssue.toLowerCase()));
      }

      if (sortField === 'name') {
        data.sort((a, b) => a.patient_name.localeCompare(b.patient_name));
      } else if (sortField === 'age') {
        data.sort((a, b) => a.age - b.age);
      }

      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [search, filterIssue, sortField]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterSortBar
          filterIssue={filterIssue}
          setFilterIssue={setFilterIssue}
          sortField={sortField}
          setSortField={setSortField}
        />
        <ToggleView view={view} setView={setView} />
      </div>

      <h1 className='flex justify-center text-5xl item-center py-3 my-2'>Patient Directry</h1>

      {loading ? (
        <div>Loading...</div>
      ) : patients.length === 0 ? (
        <div className="text-center text-gray-500">No data found for this Issue.</div>
      ) : view === 'card' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((patient) => (
            <PatientCard key={patient.patient_id} patient={patient} />
          ))}
        </div>
      ) : (
        <div>
          {patients.map((patient) => (
            <PatientRow key={patient.patient_id} patient={patient} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PatientDirectory;
