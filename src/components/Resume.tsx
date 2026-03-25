import { useEffect } from 'react';
import resumeFile from '../images/resume.pdf';

export const resumeRoutePath = '/resume';

const Resume = () => {
    useEffect(() => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'Eddie_Reyes_resume_2026.pdf';
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    return (
        <main className="container py-5 text-center text-white">
            <h1 className="mb-3">Downloading your PDF…</h1>
            <p className="mb-4">
                If the download does not start automatically, use the button below.
            </p>
            <a
                className="btn btn-primary"
                href={resumeFile}
                download="Eddie_Reyes_resume_2026.pdf"
                rel="noopener"
            >
                Download PDF
            </a>
        </main>
    );
};

export default Resume;
