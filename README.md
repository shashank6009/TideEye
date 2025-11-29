# TideEye

### AI-Driven Coastal Waste Detection, Segmentation, and Escalation Framework

### Developed by **N. S. Shashank**

Built for the **Yukti APF Fellowship, AICTE**

TideEye is a research-grade environmental monitoring system designed to automatically detect coastal waste accumulation from drone and satellite imagery. It integrates advanced computer vision models, geospatial transformation pipelines, and rule-based escalation mechanisms to form a complete end-to-end coastal intelligence framework.

This repository includes all core modules for detection, segmentation refinement, geospatial mapping, alert generation, and dashboard visualization.

---

## 1. Problem Alignment

TideEye targets the core challenge of autonomous coastal waste surveillance.

**Key objectives:**

* Detect garbage clusters from multi-source imagery
* Refine spatial accuracy using segmentation
* Convert detections into geospatial coordinates
* Trigger multi-level notifications based on predefined response rules
* Provide map-based visualization and historical logs

Supported data sources include drone RGB imagery and satellite data (Sentinel-class or equivalent).

---

## 2. System Architecture Overview

TideEye consists of four primary layers:

```
1. Imagery Intake
   - Preprocessing
   - Metadata extraction

2. AI Inference
   - YOLOv8 detection
   - SAM segmentation refinement

3. Geospatial Processing
   - Pixel-to-GPS coordinate conversion
   - Cluster generation

4. Escalation & Visualization
   - n8n workflow automation
   - Backend APIs
   - React/Vite dashboard
```

The system is modular and can be deployed component-wise or as a fully integrated pipeline.

---

## 3. Core Technical Features

### 3.1 Two-Stage Vision Pipeline

* YOLOv8 for primary garbage detection
* SAM for pixel-level boundary refinement
* Improved precision and reduced false positives

### 3.2 Geospatial Localization

* Accurate mapping of detections to latitude–longitude
* Cluster aggregation for large waste zones
* Supports orthorectified and raw EXIF-based geotagged images

### 3.3 Automated Escalation System

* n8n-based multi-level escalation
* Webhook-driven alerts
* Escalation triggered when acknowledgments exceed time limits

### 3.4 Monitoring Dashboard

* Map-based visualization of detections
* Historical logs and processing timeline
* API-driven data ingestion

---

## 4. Workflow and Usage

### 4.1 Installation

```
git clone https://github.com/your-username/tideeye.git
pip install -r requirements.txt
```

Frontend:

```
npm install
npm run dev
```

### 4.2 Minimal Inference Example

```
from tideeye import TideEyeDetector

detector = TideEyeDetector()
output   = detector.run("input.jpg")
```

Output includes bounding boxes, masks, and geospatial coordinates.

### 4.3 Minimal Escalation Trigger

```
from tideeye.escalation import escalate
escalate(output)
```

### 4.4 Dashboard Launch

```
npm run dev
```

Displays detections, clusters, maps, and escalation status.

---

## 5. Technical Advantages

* Multi-stage AI pipeline for robust detection
* High-resolution geospatial mapping
* Time-based hierarchical escalation workflow
* Modular deployment across cloud or edge infrastructure
* Scalable to multi-drone operations

---

## 6. Technical Specifications

* Detection: YOLOv8
* Segmentation: SAM
* Preprocessing: OpenCV, NumPy
* Backend: Node.js (Express)
* Frontend: React + Vite
* Map Engine: Leaflet or Mapbox
* Automation: n8n workflows

**Performance Targets**

* Detection precision: >0.85
* Localization error: <5 m (drone)
* Average inference latency (GPU): <120 ms
* Cluster generation error: minimal due to segmentation refinement

---

## 7. Codebase Overview

```
src/tideeye/
    inference/
        detector.py
        segmenter.py
        postprocess.py
    escalation/
        escalation.py
        rules.py
    backend/
        api_server.js
    dashboard/
        components/
        maps/
    utils/
        geospatial.py
        io.py
```

---

## 8. Documentation

* architecture.md
* geospatial_mapping.md
* escalation_protocol.md
* api_reference.md

---

## 9. Contribution Guidelines

Contributions should focus on:

* Improving detection accuracy
* Enhancing geospatial precision
* Strengthening escalation logic
* Maintaining modularity and clarity

---

## 10. License

MIT License. See LICENSE file for details.

---

## 11. Author

**N. S. Shashank**
Developed for the **Yukti APF Fellowship, AICTE**
