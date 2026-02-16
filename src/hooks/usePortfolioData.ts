import { useState, useEffect } from "react";
import { PORTFOLIO_DATA_URL } from "@/config";

interface EducationItem {
  id: number;
  degree: string;
  field: string;
  university: string;
  location: string;
  duration: string;
  status: string;
  gpa: string;
  highlights: string[];
  relevantCourses: string[];
  color: string;
  logo: string;
}

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  current: boolean;
  description: string;
  highlights: string[];
  skills: string[];
  logo: string;
  color: string;
}

interface PortfolioData {
  education: EducationItem[];
  experience: ExperienceItem[];
}

let cachedData: PortfolioData | null = null;
let fetchPromise: Promise<PortfolioData> | null = null;

function fetchPortfolioData(): Promise<PortfolioData> {
  if (cachedData) return Promise.resolve(cachedData);
  if (fetchPromise) return fetchPromise;

  fetchPromise = fetch(PORTFOLIO_DATA_URL)
    .then((res) => res.json())
    .then((data: PortfolioData) => {
      cachedData = data;
      return data;
    });

  return fetchPromise;
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(cachedData);
  const [loading, setLoading] = useState(!cachedData);

  useEffect(() => {
    if (cachedData) return;
    fetchPortfolioData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}

export type { EducationItem, ExperienceItem, PortfolioData };
