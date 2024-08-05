
const ConfirmationPopup = ({ onConfirm, onCancel }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this transaction?</p>
          <div className="mt-4 flex justify-end space-x-4">
            <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationPopup;
  