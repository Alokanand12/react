import html2pdf from "html2pdf.js";

export const exportPDF = () => {
  const element = document.getElementById("timetable");

  html2pdf().from(element).save("timetable.pdf");
};