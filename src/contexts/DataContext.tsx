import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Job, Application } from '@/types';

interface DataContextType {
  jobs: Job[];
  applications: Application[];
  addJob: (job: Omit<Job, 'id' | 'createdAt'>) => void;
  applyToJob: (application: Omit<Application, 'id' | 'appliedAt'>) => boolean;
  updateApplicationStatus: (applicationId: string, status: Application['status']) => void;
  getJobById: (jobId: string) => Job | undefined;
  getApplicationsForJob: (jobId: string) => Application[];
  getApplicationsForWorker: (workerId: string) => Application[];
  getJobsForAuthoriser: (authoriserId: string) => Job[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const JOBS_KEY = 'eventwork_jobs';
const APPLICATIONS_KEY = 'eventwork_applications';

// Sample initial jobs for demo
const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    authoriserId: 'sample-auth-1',
    authoriserName: 'Rajesh Kumar',
    companyName: 'Royal Caterers',
    eventType: 'wedding',
    workType: 'serving',
    workersRequired: 10,
    paymentPerDay: 800,
    date: '2026-02-15',
    startTime: '10:00',
    endTime: '22:00',
    location: 'Mumbai',
    description: 'Grand wedding event at Taj Hotel. Looking for experienced servers. Uniform provided. Meals included.',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    authoriserId: 'sample-auth-2',
    authoriserName: 'Priya Sharma',
    companyName: 'Annapurna Catering',
    eventType: 'reception',
    workType: 'table_setup',
    workersRequired: 5,
    paymentPerDay: 600,
    date: '2026-02-20',
    startTime: '14:00',
    endTime: '20:00',
    location: 'Delhi',
    description: 'Reception party for 200 guests. Need workers for table setup and decoration arrangement.',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    authoriserId: 'sample-auth-3',
    authoriserName: 'Amit Patel',
    companyName: 'Shubh Caterers',
    eventType: 'temple_function',
    workType: 'water_service',
    workersRequired: 8,
    paymentPerDay: 500,
    date: '2026-02-18',
    startTime: '06:00',
    endTime: '14:00',
    location: 'Bangalore',
    description: 'Temple inauguration ceremony. Workers needed for water and refreshment service to devotees.',
    createdAt: new Date().toISOString(),
  },
];

export function DataProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    // Load jobs from localStorage or use sample data
    const storedJobs = localStorage.getItem(JOBS_KEY);
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    } else {
      setJobs(SAMPLE_JOBS);
      localStorage.setItem(JOBS_KEY, JSON.stringify(SAMPLE_JOBS));
    }

    // Load applications from localStorage
    const storedApplications = localStorage.getItem(APPLICATIONS_KEY);
    if (storedApplications) {
      setApplications(JSON.parse(storedApplications));
    }
  }, []);

  const saveJobs = (updatedJobs: Job[]) => {
    setJobs(updatedJobs);
    localStorage.setItem(JOBS_KEY, JSON.stringify(updatedJobs));
  };

  const saveApplications = (updatedApplications: Application[]) => {
    setApplications(updatedApplications);
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(updatedApplications));
  };

  const addJob = (jobData: Omit<Job, 'id' | 'createdAt'>) => {
    const newJob: Job = {
      ...jobData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const updatedJobs = [newJob, ...jobs];
    saveJobs(updatedJobs);
  };

  const applyToJob = (applicationData: Omit<Application, 'id' | 'appliedAt'>): boolean => {
    // Check if already applied
    const existingApplication = applications.find(
      (a) => a.jobId === applicationData.jobId && a.workerId === applicationData.workerId
    );

    if (existingApplication) {
      return false;
    }

    const newApplication: Application = {
      ...applicationData,
      id: crypto.randomUUID(),
      appliedAt: new Date().toISOString(),
    };

    const updatedApplications = [newApplication, ...applications];
    saveApplications(updatedApplications);
    return true;
  };

  const updateApplicationStatus = (applicationId: string, status: Application['status']) => {
    const updatedApplications = applications.map((app) =>
      app.id === applicationId ? { ...app, status } : app
    );
    saveApplications(updatedApplications);
  };

  const getJobById = (jobId: string) => jobs.find((job) => job.id === jobId);

  const getApplicationsForJob = (jobId: string) =>
    applications.filter((app) => app.jobId === jobId);

  const getApplicationsForWorker = (workerId: string) =>
    applications.filter((app) => app.workerId === workerId);

  const getJobsForAuthoriser = (authoriserId: string) =>
    jobs.filter((job) => job.authoriserId === authoriserId);

  return (
    <DataContext.Provider
      value={{
        jobs,
        applications,
        addJob,
        applyToJob,
        updateApplicationStatus,
        getJobById,
        getApplicationsForJob,
        getApplicationsForWorker,
        getJobsForAuthoriser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
