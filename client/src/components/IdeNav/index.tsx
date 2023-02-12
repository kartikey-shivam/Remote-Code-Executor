import { IIdeNav } from "@/interface"
import React, { useState } from "react"

const fileTypes: Array<string> = ["c", "cpp", "py", "js", "java"]
export default function IdeNav({ Fontsize, Lang, HandleSubmit, handleFileChange, handleFileDownload }: IIdeNav): JSX.Element {
  const [file, setFile] = useState(null)

  return (
    <div className="py-1 item-center px-2 w-full flex justify-between bg-gray-100 dark:bg-gray-700 item-center">
      <div className="w-1/2 flex justify-between">
        <p className="py-2">
          Language: <span className="font-bold text-purple-500 dark:text-green-500">{Lang}</span>
        </p>
        <input
          type="file"
          className="flex justify-center h-fit my-auto"
          onChange={(e) => {
            e.preventDefault()
            handleFileChange(e.target.files)
          }}
        />
        <button onClick={handleFileDownload}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </button>

        <select
          name="fontSize"
          id="fontSize"
          className="m-1"
          onChange={(e) => {
            Fontsize(e.target.value)
          }}
        >
          <option value={14}>14</option>
          <option value={16}>16</option>
          <option value={18}>18</option>
          <option value={20}>20</option>
        </select>
      </div>
      <button className="py-1 px-3 m-2 bg-purple-500 rounded-md hover:bg-purple-800 dark:hover:bg-green-800 dark:bg-green-500" onClick={HandleSubmit}>
        Run
      </button>
    </div>
  )
}
