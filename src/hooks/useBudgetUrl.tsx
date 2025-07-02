import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


interface UseBudgetUrlProps {
  selectedServices: string[];
  pages: number;
  languages: number;
  isAnnual: boolean;
}

export function useBudgetUrl({
  selectedServices,
  pages,
  languages,
  isAnnual,
}: UseBudgetUrlProps) {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      services: selectedServices.join(","),
      pages: String(pages),
      languages: String(languages),
      annual: String(isAnnual),
    });
  }, [selectedServices, pages, languages, isAnnual, setSearchParams]);

}

export function useInitialBudgetFromUrl() {
  const [searchParams] = useSearchParams();

  const initialServices = searchParams.get("services")?.split(",") || [];
  const initialPages = Number(searchParams.get("pages")) || 1;
  const initialLanguages = Number(searchParams.get("languages")) || 1;
  const initialIsAnnual = searchParams.get("annual") === "true";

  return {
    initialServices,
    initialPages,
    initialLanguages,
    initialIsAnnual,
  };
}