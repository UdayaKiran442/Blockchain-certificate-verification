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
        // const columnsArr = [];
        // const valuesArr = [];
        // result.data.map((d) => {
        //   columnsArr.push(Object.keys(d));
        //   valuesArr.push(Object.keys[d]);
        // });
      },
    });
    console.log("json:", csvData);
  };
  return (
    <div>
      <input className="mt-[50%]" type="file" onChange={onUpload} />
    </div>
  );
};

export default UploadData;
