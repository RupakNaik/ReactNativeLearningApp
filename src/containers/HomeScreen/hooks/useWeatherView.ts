import { useState } from "react";

export const useWeatherView = () => {
    // Add the state
    //default what view are we showing
    const [viewType, setViewType] = useState<'list' | 'grid'>('list');
    //is modal open or closed?
    const [isModalVisible, setIsModalVisible] = useState(false);

    // COMPUTED: Derived from state (no useState needed)
    // Why computed values?
    // Instead of checking viewType === 'list' everywhere, you just use isListView — cleaner!
    const isListView = viewType === 'list';  // true or false
    const isGridView = viewType === 'grid';  // true or false

    // Add the handlers
    // ACTION: open the modal
    const openModal = () => {
        setIsModalVisible(true); //Earase "false", write "true"
    }
    // ACTION: Close the Modal
    const closeModal = () => {
        setIsModalVisible(false);
    }
    // ACTION: Change the view
    const selectView = (view: 'list' | 'grid') => {
        setViewType(view); //Earase old, write new 
    }

    return {
        //what we want to share with the outside world

        //state
        viewType,
        isModalVisible,

        // Computed (helpers)
        isListView,
        isGridView,

        //Actions
        openModal,
        closeModal,
        selectView
    };
}