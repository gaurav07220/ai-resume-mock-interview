import React, { useState, useEffect } from "react";
import axios from "axios";
import * as echarts from "echarts";
import "./style.scss";

const ResumeAnalyzer = () => {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const staticResumeContent = `
    Experienced Frontend Developer with 5 years of experience in JavaScript, React, and Node.js.
    Proven track record of building scalable, user-friendly web applications. Adept at collaborating
    with cross-functional teams to deliver high-quality products on time. Skills include Redux,
    TypeScript, and API integrations.
  `;

  const analyzeResumeWithHuggingFace = async (resumeText, jobDescription) => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
        {
          inputs: {
            source_sentence: resumeText,
            sentences: [jobDescription],
          },
        },
        {
          headers: {
            Authorization: `Bearer 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`,
          },
        }
      );

      const score = response.data[0] * 100; // Convert to percentage
      return { score, strengths: ["JavaScript", "React"], improvements: ["Node.js"] };
    } catch (error) {
      console.error("Error using Hugging Face API:", error);
      throw new Error("Hugging Face API failed");
    }
  };

  const handleAnalyzeResume = async () => {
    setLoading(true);
    setError("");
    try {
      const jobDescription = "We are looking for a developer skilled in JavaScript, React, and Node.js.";
      const analysis = await analyzeResumeWithHuggingFace(staticResumeContent, jobDescription);
      setAnalysisResult(analysis);
    } catch (error) {
      setError("Error analyzing resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (analysisResult) {
      const chartDom = document.getElementById("chart");
      const chartInstance = echarts.init(chartDom);
      const option = {
        tooltip: { trigger: "item" },
        legend: { bottom: "0%", left: "center" },
        series: [
          {
            type: "pie",
            radius: "50%",
            data: [
              { value: analysisResult.score.toFixed(2), name: "Matched" },
              { value: 100 - analysisResult.score.toFixed(2), name: "Remaining" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      chartInstance.setOption(option);
    }
  }, [analysisResult]);

  return (
    <div className="resume-analyzer">
      <header className="header">
        <h1>Resume Analyzer</h1>
        <p>Analyze your resume and match it with job descriptions effortlessly.</p>
      </header>

      <main className="main">
        <div className="card">
          <h2>Resume Content</h2>
          <pre>{staticResumeContent}</pre>
          <button className="button" onClick={handleAnalyzeResume} disabled={loading}>
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
          {error && <p className="error">{error}</p>}
        </div>

        {analysisResult && (
          <div className="report">
            <div id="chart" className="chart"></div>
            <div className="details">
              <h3>Analysis Report</h3>
              <p>
                <strong>Matching Score:</strong> {analysisResult.score.toFixed(2)}%
              </p>
              <h4>Strengths</h4>
              <ul>
                {analysisResult.strengths.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h4>Areas for Improvement</h4>
              <ul>
                {analysisResult.improvements.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Resume Analyzer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResumeAnalyzer;
