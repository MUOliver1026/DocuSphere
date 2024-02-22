import React, { useEffect, useState } from 'react';
import { createDocument, deleteDocument, fetchDocuments, updateDocument } from '../api/documents';

interface Document {
  _id: string
  title: string
  content: string
}

const DocumentDashboard = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch documents on component mount
  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const data = await fetchDocuments();
        setDocuments(data);
      } catch (error) {
        console.error('Failed to fetch documents', error);
      } finally {
        setLoading(false);
      }
    };

    loadDocuments();
  }, []);

  // Handle adding a new document
  const handleAdd = async () => {
    const title = prompt('Enter document title:');
    const content = prompt('Enter document content:');
    if (title && content) {
      try {
        const newDocument = await createDocument(title, content);
        setDocuments([...documents, newDocument]);
      } catch (error) {
        alert('Failed to add document')
      }
    }
  };

  // Handle editing an existing document
  const handleEdit = async (id: string) => {
    console.log(id); // 首先确认这里的 id 是否为 expected value
    const doc = documents.find(doc => doc._id === id);
    if (!doc) return;
    const newTitle = prompt('Edit document title:', doc.title);
    const newContent = prompt('Edit document content:', doc.content);
    console.log('Editing document with ID:', id); // 在 handleEdit 中
    if (newTitle && newContent) {
      try {
        await updateDocument(id, newTitle, newContent);
        setDocuments(documents.map(doc => (doc._id === id ? { ...doc, title: newTitle, content: newContent } : doc)));
      } catch (error) {
        alert('Failed to update document')
      }
    }
  };

  // Handle deleting a document
  const handleDelete = async (id: string) => {
    console.log('Deleting document with ID:', id); // 在 handleDelete 中
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        await deleteDocument(id);
        setDocuments(documents.filter(doc => doc._id !== id));
      } catch (error) {
        alert('Failed to delete document')
      }
    }
  };

  if (loading) {
    return <div>Loading documents...</div>;
  }

  return (
    <div>
      <button onClick={handleAdd} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Document
      </button>
      {documents.length > 0
        ? (
            documents.map((doc) => (
          <div key={doc._id} className="border-b p-2 flex justify-between items-center">
            <span>{doc.title}</span>
            <span>{doc.content}</span>
            <div>
              <button onClick={async () => { await handleEdit(doc._id) }} className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                Edit
              </button>
              <button onClick={async () => { await handleDelete(doc._id) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Delete
              </button>
            </div>
          </div>
            ))
          )
        : (
        <div>No documents found</div>
          )}
    </div>
  );
};

export default DocumentDashboard;
