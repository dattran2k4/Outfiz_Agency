import { useState, useEffect } from "react";

export const usePagination = ({ data = [], itemsPerPage = 3 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber : number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    return { currentPage, totalPages, currentData, handlePageChange };
};
