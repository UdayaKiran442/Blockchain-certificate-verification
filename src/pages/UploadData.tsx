import Papa from "papaparse";
import { useState } from "react";

interface CsvRow {
  [key: string]: string | number | boolean | null;
}

const UploadData = () => {
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onUpload = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setCsvData(result.data as CsvRow[]);
        console.log("Result", result);
      },
    });
    console.log("json:", csvData);
  };
  return (
    <div>
      <input
        className="mt-[50%]"
        accept=".csv"
        type="file"
        onChange={onUpload}
      />
    </div>
  );
};

export default UploadData;
