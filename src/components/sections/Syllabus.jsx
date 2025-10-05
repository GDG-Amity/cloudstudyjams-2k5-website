import { motion } from 'framer-motion';
import '../../styles/syllabus.css';

const syllabusData = [
  { id: 1, title: 'The Basics of Google Cloud Compute' },
  { id: 2, title: 'Get Started with Cloud Storage' },
  { id: 3, title: 'Get Started with Pub/Sub' },
  { id: 4, title: 'Get Started with API Gateway' },
  { id: 5, title: 'Get Started with Looker' },
  { id: 6, title: 'Get Started with Dataplex' },
  { id: 7, title: 'Get Started with Google Workspace Tools' },
  { id: 8, title: 'App Building with Appsheet' },
  { id: 9, title: 'Develop with Apps Script and AppSheet' },
  { id: 10, title: 'Build a Website on Google Cloud' },
  { id: 11, title: 'Set Up a Google Cloud Network' },
  { id: 12, title: 'Store, Process, and Manage Data on Google Cloud - Console' },
  { id: 13, title: 'Cloud Functions: 3 Ways' },
  { id: 14, title: 'App Engine: 3 Ways' },
  { id: 15, title: 'Cloud Speech API: 3 Ways' },
  { id: 16, title: 'Monitoring in Google Cloud' },
  { id: 17, title: 'Analyze Speech and Language with Google APIs' },
  { id: 18, title: 'Prompt Design in Vertex AI' },
  { id: 19, title: 'Develop GenAI Apps with Gemini and Streamlit' },
  { id: 20, title: 'Gen AI Arcade Game: Level 3 (please refer to link in your Enrollment email)' },
];

const Syllabus = () => {
  return (
    <motion.section
      id="syllabus"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="panel">
          <div className="panel-bg" />
          <h2 className="section-title">Syllabus</h2>
          <div className="syllabus-grid">
            {syllabusData.map((item) => (
              <div className="syllabus-item" key={item.id}>
                <div className="syllabus-number">{item.id}</div>
                <div className="syllabus-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Syllabus;