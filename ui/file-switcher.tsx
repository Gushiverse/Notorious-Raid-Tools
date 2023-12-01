import Papa from 'papaparse';

export default function FileSwitcher() {

  const onFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    console.log(event.target.files[0]);
    const csvFile = event.target.files[0];
    Papa.parse(csvFile, {
      complete: function(results) {
        console.log("Finished:", results.data);
      }
    });
  }

  const acceptableFileTypes = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv';

  return (
    <>
      <label htmlFor="csvFileSelector">
        ChooseFile (*csv, xls, etc)
      </label>
      <input type="file" id='csvFileSelector' accept={acceptableFileTypes} onChange={onFileChangeHandler} />
    </>
  )
}