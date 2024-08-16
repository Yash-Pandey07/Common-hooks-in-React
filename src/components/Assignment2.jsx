import React, { useEffect, useState, useMemo } from "react";

// In this assignment, you will create a component that renders a large list of sentences and 
// includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is 
// only re-calculated when necessary (e.g., when the filter criteria changes).
// This version also includes pagination to handle large datasets efficiently.

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const PAGE_SIZE = 20; // Number of sentences per page

export function Assignment2() {
    // State to hold the list of sentences
    const [sentences, setSentences] = useState([]);

    // State to hold the filter text input by the user
    const [filter, setFilter] = useState("");

    // State to manage the current page
    const [currentPage, setCurrentPage] = useState(1);

    // useEffect to initialize the sentences list
    useEffect(() => {
        const generatedSentences = [];
        for (let i = 0; i < TOTAL_LINES; i++) {
            let sentence = "";
            for (let j = 0; j < words.length; j++) {
                sentence += (words[Math.floor(words.length * Math.random())]) + " ";
            }
            generatedSentences.push(sentence);
        }
        setSentences(generatedSentences); // Set the generated sentences to state
    }, []);

    // useMemo to optimize filtering of sentences
    const filteredSentences = useMemo(() => {
        return sentences.filter(x => x.includes(filter));
    }, [filter, sentences]);

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    // Get the sentences to be displayed on the current page
    const paginatedSentences = filteredSentences.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredSentences.length / PAGE_SIZE);

    return (
        <div>
            <h4>Input list : hi, my, name, is, for, to, random, word;</h4>
            {/* Input field for user to type filter criteria */}
            <input
                type="text"
                onChange={(e) => {
                    setFilter(e.target.value); // Update the filter state
                    setCurrentPage(1); // Reset to first page on filter change
                }}
                placeholder="Filter sentences..."
            />

            {/* Display the paginated and filtered sentences */}
            {paginatedSentences.length > 0 ? (
                paginatedSentences.map((word, index) => (
                    <div key={index}>
                        {word}
                    </div>
                ))
            ) : (
                <p>No sentences match the filter.</p>
            )}

            {/* Pagination controls */}
            {totalPages > 1 && (
                <div style={{ marginTop: "20px" }}>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    <span> Page {currentPage} of {totalPages} </span>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
