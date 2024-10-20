import { useEffect, useState } from "react";
import axios from "axios";

export function Todo() {
  const [currentTab, setCurrentTab] = useState(1); // Fixed typo
  const [tabData, setTabData] = useState({}); // Fixed typo
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${currentTab}`
        );
        setTabData(response.data);
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentTab]);

  return (
    <div className="p-4">
      <div className="space-x-4">
        <button
          onClick={() => setCurrentTab(1)}
          className={`py-2 px-4 rounded bg-green-300 ${
            currentTab === 1 ? "text-red-400" : "text-black"
          }`}
        >
          Todo 1
        </button>
        <button
          onClick={() => setCurrentTab(2)}
          className={`py-2 px-4 rounded bg-violet-200 ${
            currentTab === 2 ? "text-red-400" : "text-black"
          }`}
        >
          Todo 2
        </button>
        <button
          onClick={() => setCurrentTab(3)}
          className={` py-2 px-4 rounded-md bg-stone-300 ${
            currentTab === 3 ? "text-red-400" : "text-black"
          }`}
        >
          Todo 3
        </button>
        <button
          onClick={() => setCurrentTab(4)}
          className={`px-4 py-2 rounded bg-indigo-300 ${
            currentTab === 4 ? "text-red-300" : "text-black"
          }`}
        >
          Todo 4
        </button>
      </div>

      <div className="mt-4 text-lg">
        {loading ? (
          "Loading..."
        ) : (
          <p className="px-2 py-4 rounded bg-slate-300">{tabData.title}</p>
        )}
      </div>
    </div>
  );
}
