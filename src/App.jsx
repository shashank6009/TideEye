import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Try it out', href: '#try-demo' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

const footerNavItems = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Experience', href: '#experience' },
  { label: 'Try It', href: '#try-demo' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

const MotionDiv = Motion.div
const MotionImg = Motion.img

const statCards = [
  {
    value: '25,400 tonnes',
    label: 'Estimated coastal plastic entering Indian waters yearly',
  },
  {
    value: '28% decline',
    label: 'Tourism drop in polluted beach districts',
  },
  {
    value: '420 hotspots',
    label: 'Identified coastal waste zones (example)',
  },
]

const problemImages = [
  {
    src: '/images/problem/pblm1.png',
    alt: 'Waste accumulation along Indian coastline',
  },
  {
    src: '/images/problem/pblm2.png',
    alt: 'Plastic and debris across shoreline rocks',
  },
  {
    src: '/images/problem/pblm3.png',
    alt: 'Polluted tidal zone with floating trash',
  },
  {
    src: '/images/problem/pblm4.png',
    alt: 'Coastline impact after storm surge and waste',
  },
]

const technologyCards = [
  {
    title: 'Satellite Imagery',
    caption: 'Daily multi-spectral passes highlight macro waste plumes.',
    image: '/images/solution/satellite.png',
    alt: 'Satellite imagery showing coastline waste plumes',
  },
  {
    title: 'Drone Flyovers',
    caption: 'Low-altitude missions map beach debris in ultra detail.',
    image: '/images/solution/drone.png',
    alt: 'Drone scanning shoreline for debris build-up',
  },
  {
    title: 'AI Detection Model',
    caption: 'Custom RoboFlow pipeline classifies debris signatures.',
    image: '/images/solution/model.png',
    alt: 'AI detection interface highlighting waste hotspots',
  },
]

const timelineSteps = [
  {
    title: 'Detect',
    copy: 'AI identifies plastic, debris, and major waste signatures.',
  },
  {
    title: 'Analyze',
    copy: 'Shoreline geometry, tidal flow, wind, and currents processed together.',
  },
  {
    title: 'Predict',
    copy: 'Forecasts future waste accumulation and emerging hotspots.',
  },
  {
    title: 'Alert',
    copy: 'Automated hierarchical notifications via n8n to municipal authorities.',
  },
]

const teamMembers = [
  {
    name: 'N.S. Shashank',
    role: 'AI Engineer & Systems Lead',
    photo: '/images/team/Shashank.png',
    bullets: [
      'IBM AI Developer Professional Certificate',
      'Google Professional Data Analytics Certificate',
      'Microsoft Backend Developer Certification (in progress)',
      'Best Presentation Award – NTU Singapore',
      'Marketing Lead, ACE SVCE',
    ],
  },
  {
    name: 'Sarvesh Ragav',
    role: 'Computer Vision Specialist',
    photo: '/images/team/Sarvesh.png',
    bullets: [
      'Domain expertise in satellite/drone imagery',
      'Strong in model training & deployment',
      'Research-focused execution',
      'Core developer for TideEye’s detection pipeline',
    ],
  },
  {
    name: 'Shrinidhi Dasaraty',
    role: 'Experience Designer & Frontend Lead',
    photo: '/images/team/Shrinidhi.png',
    bullets: [
      'Responsible for high-impact UI/UX',
      'Orchestrates the visual storytelling (Experience section)',
      'Strong communication + presentation',
      'Ensures clarity and polish throughout the platform',
    ],
  },
]

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="Hero">
      <MotionDiv
        className="hero__background"
        initial={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 2.4, ease: 'easeInOut' }}
        role="presentation"
      />
      <MotionDiv
        className="hero__mist"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
        role="presentation"
      />
      <MotionImg
        src="/images/hometext.png"
        alt="TideEye overlay"
        className="hero__mark"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  )
}

const ProblemSection = () => (
  <section className="problem-section" id="problem">
    <div className="container problem-grid">
      <Motion.p
        className="problem-eyebrow"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        01 — THE PROBLEM WE ARE FACING RIGHT NOW
      </Motion.p>

      <Motion.h2
        className="problem-headline"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      >
        India’s coastlines are drowning in waste — hurting tourism, marine life, and
        global reputation.
      </Motion.h2>

      <Motion.p
        className="problem-subcopy"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      >
        Plastic and debris pile up along the shore, suffocating fragile ecosystems,
        pushing travelers away, and cementing a global image of India’s coasts as
        polluted and neglected.
      </Motion.p>

      <div className="problem-stats">
        {statCards.map((card, index) => (
          <MotionDiv
            key={card.value}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <span className="stat-card__value">{card.value}</span>
            <span className="stat-card__label">{card.label}</span>
          </MotionDiv>
        ))}
      </div>
    </div>

    <MotionDiv
      className="problem-carousel"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <div className="carousel-track">
        {[...problemImages, ...problemImages].map((image, idx) => (
          <div className="carousel-card" key={`${image.alt}-${idx}`}>
            <img src={image.src} alt={image.alt} />
            <span>{image.alt}</span>
          </div>
        ))}
      </div>
    </MotionDiv>

  </section>
)

const SolutionSection = () => (
  <section className="solution-section" id="solution">
    <div className="container solution-grid">
      <Motion.p
        className="solution-eyebrow"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        02 — HOW WE ARE SOLVING THIS PROBLEM
      </Motion.p>

      <Motion.h2
        className="solution-headline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      >
        A multi-layered AI system that detects, analyzes, predicts, and alerts.
      </Motion.h2>

      <Motion.p
        className="solution-subcopy"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
      >
        TideEye uses satellite imagery, drone flyovers, and a custom AI detection model
        to identify coastal waste. Then we combine ocean currents, wind flow, and
        shoreline patterns to predict where waste will accumulate. Finally, automated
        hierarchical notifications ensure cleanup teams take action at the right time.
      </Motion.p>

      <div className="solution-tech-grid">
        {technologyCards.map((card, index) => (
          <MotionDiv
            key={card.title}
            className="tech-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <div className="tech-card__media">
              <img src={card.image} alt={card.alt} loading="lazy" />
            </div>
            <div className="tech-card__body">
              <h3>{card.title}</h3>
              <p>{card.caption}</p>
            </div>
          </MotionDiv>
        ))}
      </div>

      <div className="solution-timeline">
        {timelineSteps.map((step, index) => (
          <MotionDiv
            key={step.title}
            className="timeline-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 * index }}
          >
            <span className="timeline-card__index">{`0${index + 1}`}</span>
            <h4>{step.title}</h4>
            <p>{step.copy}</p>
          </MotionDiv>
        ))}
      </div>

      <MotionDiv
        className="solution-workflow"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
      >
        <div className="workflow-media">
          <img
            src="/images/solution/n8n.png"
            alt="n8n workflow automation for TideEye alerts"
            loading="lazy"
          />
        </div>
        <p className="workflow-caption">
          Automating the flow of critical cleanup alerts to the right authorities.
        </p>
      </MotionDiv>
    </div>
  </section>
)

const ExperienceTeaser = ({ onOpenExperience }) => {
  const handleTryItScroll = (event) => {
    event.preventDefault()
    const tryItSection = document.getElementById('try-demo')
    if (tryItSection) {
      tryItSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="experience-teaser">
      <div className="container experience-teaser__content">
        <Motion.p
          className="experience-teaser__eyebrow"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          03 — READY TO EXPERIENCE TIDEEYE?
        </Motion.p>

        <Motion.h2
          className="experience-teaser__headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          See the problem—and our solution—come alive.
        </Motion.h2>

        <Motion.p
          className="experience-teaser__subtext"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          A cinematic walkthrough that shows coastal impact, our AI detection, and how
          we trigger actionable alerts. Designed for judges and partners.
        </Motion.p>

        <Motion.div
          className="experience-teaser__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <button
            type="button"
            className="button button--primary experience-teaser__primary"
            onClick={onOpenExperience}
            aria-label="Open the TideEye Experience"
          >
            <span className="experience-teaser__icon" aria-hidden="true">▶</span>
            EXPERIENCE THE DEMO →
          </button>
          <a
            href="#try-demo"
            className="link-secondary experience-teaser__secondary"
            onClick={handleTryItScroll}
          >
            Try a live upload instead →
          </a>
        </Motion.div>
      </div>
    </section>
  )
}

const TryItSection = () => {
  const fileInputRef = useRef(null)
  const [uploadName, setUploadName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [originalImageUrl, setOriginalImageUrl] = useState(null)

  // Draw bounding boxes on image
  const drawBoundingBoxes = useCallback((imageUrl, predictions) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        
        // Set canvas size to match image
        canvas.width = img.width
        canvas.height = img.height
        
        // Draw the original image
        ctx.drawImage(img, 0, 0)
        
        // Draw bounding boxes for each prediction
        predictions.forEach((pred) => {
          // Roboflow returns x, y, width, height in normalized coordinates (0-1) or pixels
          // We need to check the format and convert if needed
          let x, y, width, height
          
          if (pred.x !== undefined && pred.y !== undefined && pred.width !== undefined && pred.height !== undefined) {
            // Check if coordinates are normalized (0-1) or in pixels
            if (pred.x <= 1 && pred.y <= 1) {
              // Normalized coordinates
              x = pred.x * canvas.width
              y = pred.y * canvas.height
              width = pred.width * canvas.width
              height = pred.height * canvas.height
            } else {
              // Pixel coordinates
              x = pred.x
              y = pred.y
              width = pred.width
              height = pred.height
            }
            
            // Calculate top-left corner (Roboflow might return center coordinates)
            // If x, y is center, adjust:
            const boxX = x - width / 2
            const boxY = y - height / 2
            
            // Draw bounding box
            ctx.strokeStyle = '#00ff00' // Green color
            ctx.lineWidth = 3
            ctx.strokeRect(boxX, boxY, width, height)
            
            // Draw label background
            const label = `${pred.class || 'Object'} ${((pred.confidence || 0) * 100).toFixed(1)}%`
            ctx.fillStyle = 'rgba(0, 255, 0, 0.8)'
            ctx.fillRect(boxX, boxY - 20, ctx.measureText(label).width + 10, 20)
            
            // Draw label text
            ctx.fillStyle = '#000'
            ctx.font = '14px Arial'
            ctx.fillText(label, boxX + 5, boxY - 5)
          }
        })
        
        // Convert canvas to data URL
        const annotatedImageUrl = canvas.toDataURL('image/png')
        resolve(annotatedImageUrl)
      }
      img.onerror = reject
      img.src = imageUrl
    })
  }, [])

  // Send image to Roboflow API
  const sendToModel = useCallback(async (file) => {
    if (!file) return

    setIsLoading(true)
    setResult(null)

    try {
      // Convert file to base64 and store original image URL
      const { base64Image, imageUrl } = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
          // Store the full data URL for drawing bounding boxes
          const fullDataUrl = reader.result
          // Remove data URL prefix (e.g., "data:image/jpeg;base64,") for API
          const base64 = fullDataUrl.split(',')[1]
          resolve({ base64Image: base64, imageUrl: fullDataUrl })
        }
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
      
      // Store original image URL for drawing bounding boxes
      setOriginalImageUrl(imageUrl)
      const currentImageUrl = imageUrl // Use local variable for immediate use

      // Debug: Log what we're sending
      console.log('Sending to Roboflow:', {
        fileName: file?.name,
        fileSize: file?.size,
        base64Length: base64Image.length,
      })

      // Roboflow API endpoint
      const API_ENDPOINT = import.meta.env.VITE_ROBOFLOW_API_URL || 'https://serverless.roboflow.com/tideeye-nh6m5/2'
      const API_KEY = import.meta.env.VITE_ROBOFLOW_API_KEY || 'Dj9h7OUjCQKlNmbgL6cO'

      // Build URL with API key as query parameter
      const url = new URL(API_ENDPOINT)
      url.searchParams.append('api_key', API_KEY)

      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: base64Image,
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Roboflow API error:', response.status, errorText)
        throw new Error(`API error: ${response.status} - ${errorText}`)
      }

      const data = await response.json()
      console.log('Roboflow response:', data)

      // Get predictions from Roboflow response
      const predictions = data?.predictions || []
      const predictionsCount = predictions.length

      // Send trash count to n8n webhook
      try {
        const webhookUrl = 'https://sarveshragav.app.n8n.cloud/webhook-test/trash-alert'
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            trash_count: predictionsCount,
          }),
        })
        console.log('Sent trash count to webhook:', predictionsCount)
      } catch (webhookError) {
        console.error('Error sending to webhook:', webhookError)
        // Don't fail the whole process if webhook fails
      }

      // Draw bounding boxes on the image
      let annotatedImageUrl = currentImageUrl
      if (predictions.length > 0 && currentImageUrl) {
        try {
          annotatedImageUrl = await drawBoundingBoxes(
            currentImageUrl,
            predictions
          )
        } catch (error) {
          console.error('Error drawing bounding boxes:', error)
          // Fallback to original image if drawing fails
          annotatedImageUrl = currentImageUrl
        }
      }

      // Store full Roboflow response with annotated image
      setIsLoading(false)
      setResult({
        raw: data,
        fullResponse: JSON.stringify(data, null, 2),
        predictions: predictions,
        image: data?.image,
        time: data?.time,
        predictionsCount: predictionsCount,
        annotatedImageUrl: annotatedImageUrl,
        originalImageUrl: currentImageUrl,
      })
    } catch (error) {
      console.error('Error sending to Roboflow:', error)
      setIsLoading(false)
      setResult({
        waste: 'Error processing image',
        confidence: 'Please try again',
        hotspot: 'API connection failed',
        eta: 'Unable to process',
        error: error.message,
      })
    }
  }, [drawBoundingBoxes])

  const handleFile = useCallback(
    (file) => {
      if (!file) return
      setUploadName(file.name)
      sendToModel(file)
    },
    [sendToModel],
  )

  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files?.[0]
    handleFile(file)
  }

  const handleDrag = (event) => {
    event.preventDefault()
  }

  const handleClickUpload = () => {
    fileInputRef.current?.click()
  }

  const handleSample = async () => {
    try {
      // Fetch a sample image (you can replace this with an actual sample image path)
      const sampleImageUrl = '/images/problem/pblm1.png' // Using existing problem image as sample
      const response = await fetch(sampleImageUrl)
      const blob = await response.blob()
      const file = new File([blob], 'sample_coastline.png', { type: 'image/png' })
      
      setUploadName('Sample_coastline.png')
      sendToModel(file)
    } catch (error) {
      console.error('Error loading sample image:', error)
      setResult({
        waste: 'Error loading sample',
        confidence: 'Please try uploading an image',
        hotspot: 'Sample image unavailable',
        eta: 'Try uploading your own image',
      })
    }
  }

  const hasUpload = Boolean(uploadName)

  return (
    <section className="try-section" id="try-demo">
      <div className="container try-content">
        <Motion.p
          className="solution-eyebrow"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          04 — TRY IT OUT
        </Motion.p>
        <Motion.h2
          className="try-headline"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Upload a coastline photo and watch our AI detect waste in real time.
        </Motion.h2>
        <Motion.p
          className="try-subcopy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          This demo simulates how TideEye analyzes coastlines using satellite and drone imagery.
        </Motion.p>

        <div
          className="upload-box"
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClickUpload}
          role="button"
          tabIndex={0}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png"
            hidden
            onChange={(event) => handleFile(event.target.files?.[0])}
          />
          <div className="upload-icon" aria-hidden="true" />
          <p>{uploadName || 'Drag & Drop a coastline image here or click to upload'}</p>
          <span>Supported: JPG, PNG</span>
        </div>

        <button type="button" className="link-button" onClick={handleSample}>
          Use a sample coastline image instead
        </button>

        <div className={`output-wrapper ${hasUpload ? 'output-wrapper--visible' : ''}`}>
          {hasUpload && (
            <>
              <div className="output-placeholder">
                {isLoading ? (
                  <div className="output-loading">
                    <div className="loading-ring" aria-hidden="true" />
                    <p>Analyzing image with TideEye AI…</p>
                  </div>
                ) : result?.annotatedImageUrl ? (
                  <img 
                    src={result.annotatedImageUrl} 
                    alt="Detected waste with bounding boxes" 
                  />
                ) : originalImageUrl ? (
                  <img 
                    src={originalImageUrl} 
                    alt="Uploaded image" 
                  />
                ) : (
                  <span>AI Detection Output (Waste bounding boxes / hotspots)</span>
                )}
              </div>
              {result && !isLoading && (
                <div className="output-summary">
                  <h4>Detection Results</h4>
                  
                  <div>
                    <p><strong>Total Detections:</strong> {result.predictionsCount}</p>
                    {result.time && <p><strong>Processing Time:</strong> {result.time}s</p>}
                    {result.image && (
                      <p><strong>Image Dimensions:</strong> {result.image.width} × {result.image.height}px</p>
                    )}
                  </div>
                    
                  {result.predictions && result.predictions.length > 0 && (
                    <div>
                      <h5>Detected Objects</h5>
                      {result.predictions.map((pred, idx) => (
                        <div key={idx} className="detection-item">
                          <p><strong>Detection #{idx + 1}</strong></p>
                          {pred.class && <p><strong>Class:</strong> {pred.class}</p>}
                          {pred.confidence !== undefined && (
                            <p><strong>Confidence:</strong> {(pred.confidence * 100).toFixed(2)}%</p>
                          )}
                          {(pred.x || pred.y || pred.width || pred.height) && (
      <div>
                              <p><strong>Bounding Box:</strong></p>
                              {pred.x && <p>X: {pred.x.toFixed(2)}</p>}
                              {pred.y && <p>Y: {pred.y.toFixed(2)}</p>}
                              {pred.width && <p>Width: {pred.width.toFixed(2)}</p>}
                              {pred.height && <p>Height: {pred.height.toFixed(2)}</p>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                    
                  <details>
                    <summary>View Full JSON Response</summary>
                    <pre className="json-response">
                      {result.fullResponse}
                    </pre>
                  </details>
                </div>
              )}
            </>
          )}
        </div>

        <div className="try-cta">
          <a href="#solution" className="button button--primary">
            Learn How It Works
          </a>
          <a href="#experience" className="link-secondary link-secondary--cta">
            Back to Experience
          </a>
        </div>
      </div>
    </section>
  )
}

const TeamSection = () => (
  <section className="team-section" id="team">
    <div className="container team-content">
      <Motion.p
        className="team-eyebrow"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        05 — THE TEAM BEHIND TIDEEYE
      </Motion.p>
      <Motion.h2
        className="team-headline"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        A young, multidisciplinary team building the future of coastal intelligence.
      </Motion.h2>
      <Motion.p
        className="team-subcopy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        Backed by certifications, research experience, and deep technical execution.
      </Motion.p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <MotionDiv
            className="team-card"
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
          <div className="team-photo">
            <img src={member.photo} alt={member.name} loading="lazy" />
          </div>
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </MotionDiv>
        ))}
      </div>

      <Motion.p
        className="team-closing"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        Together, we combine AI, design, and engineering to protect India’s coastlines.
      </Motion.p>
    </div>
  </section>
)

const ContactSection = () => (
  <section className="contact-section" id="contact">
    <div className="container contact-content">
      <Motion.p
        className="contact-eyebrow"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        06 — GET IN TOUCH
      </Motion.p>
      <Motion.h2
        className="contact-headline"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Let’s bring intelligent coastal protection to the world.
      </Motion.h2>
      <Motion.p
        className="contact-subcopy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        We’re open to collaborations, pilots, research partnerships, and funding
        conversations.
      </Motion.p>

      <Motion.form
        className="contact-form"
        onSubmit={(event) => event.preventDefault()}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label className="contact-form__message">
          Message
          <textarea placeholder="Tell us about your coastline, pilot idea, or collaboration." />
        </label>
        <button type="submit" className="button button--primary">
          Send Message
        </button>
      </Motion.form>

      <Motion.div
        className="contact-final-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <a href="#try-demo" className="button button--primary contact-cta">
          REQUEST A PILOT →
        </a>
        <span>We respond within 24 hours.</span>
      </Motion.div>
    </div>
  </section>
)

const ExperienceOverlay = ({ isOpen, onClose }) => {
  const totalSlides = 9
  const [currentSlide, setCurrentSlide] = useState(0)
  const [dividerPosition, setDividerPosition] = useState(50)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const handleTryItClick = useCallback(() => {
    onClose()
    // Small delay to allow overlay to close before scrolling
    setTimeout(() => {
      const tryItSection = document.getElementById('try-demo')
      if (tryItSection) {
        tryItSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (event) => {
      if (event.key === 'ArrowRight') nextSlide()
      if (event.key === 'ArrowLeft') prevSlide()
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, nextSlide, onClose, prevSlide])

  if (!isOpen) return null

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <div className="experience-slide experience-slide--center">
            <div className="experience-particles" aria-hidden="true" />
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="experience-logo"
            >
              <img src="/images/logo.png" alt="TideEye logo" className="experience-logo__img" />
              <span>TideEye</span>
            </Motion.div>
            <Motion.p
              className="experience-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2 }}
            >
              Welcome to the TideEye Experience.
            </Motion.p>
            <Motion.div
              className="experience-continue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Continue →
            </Motion.div>
          </div>
        )
      case 1:
        return (
          <div className="experience-slide">
            <div className="experience-text-block">
              <h3>India’s coastlines are drowning in waste.</h3>
              <p>This is the reality we often fail to look at.</p>
            </div>
            <div className="experience-placeholder experience-placeholder--large">
              <img src="/images/problem/pblm1.png" alt="Polluted Coastline" />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="experience-slide experience-slide--impact">
            <div className="experience-text-block">
              <h3>Tourism collapses where coastlines rot.</h3>
              <p>Pollution drives tourists away.</p>
              <p>Local economies suffer.</p>
              <p>India’s reputation takes a global hit.</p>
            </div>
            <div className="impact-visuals">
              <div className="experience-placeholder experience-placeholder--chart">
                <img src="/tourismdecline.png" alt="Tourism Decline Chart" />
              </div>
              <div className="experience-placeholder experience-placeholder--small">
                <img src="/images/problem/pblm3.png" alt="Dirty Beach" />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="experience-slide experience-slide--split">
            <div className="split-image split-image--left" style={{ width: `${dividerPosition}%` }}>
              <img src="/images/before.png" alt="Before - Clean Coastline" />
            </div>
            <div className="split-image split-image--right" style={{ left: `${dividerPosition}%`, width: `${100 - dividerPosition}%` }}>
              <img src="/images/after.png" alt="After - Polluted Coastline" />
            </div>
            <div className="split-label split-label--left">
              Before — Clean Coastline
            </div>
            <div className="split-label split-label--right">
              After — Polluted Coastline
            </div>
            <div className="split-divider" style={{ left: `${dividerPosition}%` }}>
              <span />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={dividerPosition}
              onChange={(event) => setDividerPosition(Number(event.target.value))}
              className="split-slider"
              aria-label="Before/After Divider"
            />
            <div className="split-title">This is the difference a single year can make.</div>
          </div>
        )
      case 4:
        return (
          <div className="experience-slide experience-slide--grid">
            <div className="experience-text-block">
              <h3>We begin with eyes in the sky.</h3>
              <p>Satellite imagery</p>
              <p>Drone flyovers</p>
              <p>Continuous monitoring</p>
            </div>
            <div className="experience-grid">
              <div className="experience-placeholder">
                <img src="/images/solution/satellite.png" alt="Satellite Image" />
              </div>
              <div className="experience-placeholder">
                <img src="/images/solution/drone.png" alt="Drone Capture" />
              </div>
              <div className="experience-placeholder">
                <img src="/images/scan.png" alt="Coastal Region Scan" />
              </div>
            </div>
          </div>
        )
      case 5:
        return (
          <div className="experience-slide">
            <div className="experience-text-block">
              <h3>AI identifies waste, even before humans can.</h3>
              <p>Our custom model detects plastic, debris, hotspots.</p>
            </div>
            <div className="experience-placeholder experience-placeholder--model">
              <img src="/images/solution/model.png" alt="AI Detection Model Screenshot" />
            </div>
          </div>
        )
      case 6:
        return (
          <div className="experience-slide">
            <div className="experience-text-block">
              <h3>Forecasting future waste accumulation.</h3>
              <p>Currents, tides, wind flow, shoreline geometry.</p>
              <p>Predicting tomorrow’s waste, today.</p>
            </div>
            <div className="experience-placeholder experience-placeholder--heatmap">
              <img src="/images/heatmap.png" alt="Prediction Heatmap" />
            </div>
          </div>
        )
      case 7:
        return (
          <div className="experience-slide">
            <div className="experience-text-block">
              <h3>Action delivered instantly.</h3>
              <p>Municipal authorities are notified automatically.</p>
              <p>Hierarchical escalation ensures accountability.</p>
            </div>
            <div className="experience-placeholder experience-placeholder--workflow">
              <img src="/images/solution/n8n.png" alt="n8n Workflow - Hierarchical Notifications" />
            </div>
          </div>
        )
      case 8:
      default:
        return (
          <div className="experience-slide experience-slide--center">
            <div className="experience-text-block">
              <h3>Now, see TideEye in action.</h3>
              <p>Upload a coastline image and watch our model detect waste in real-time.</p>
            </div>
            <div className="experience-cta">
              <button type="button" className="button button--primary" onClick={handleTryItClick}>
                Try It Yourself
              </button>
            </div>
      </div>
        )
    }
  }

  return (
    <div className="experience-overlay" role="dialog" aria-modal="true">
      <button className="experience-close" onClick={onClose} aria-label="Close experience">
        ×
      </button>
      <AnimatePresence mode="wait">
        <MotionDiv
          key={currentSlide}
          className="experience-slide-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {renderSlide()}
        </MotionDiv>
      </AnimatePresence>
      <div className="experience-controls">
        <button type="button" onClick={prevSlide} aria-label="Previous slide">
          ←
        </button>
        <span>
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
        <button type="button" onClick={nextSlide} aria-label="Next slide">
          →
        </button>
      </div>
    </div>
  )
}

function App() {
  const year = new Date().getFullYear()
  const [isExperienceOpen, setExperienceOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="logo">
            <img src="/images/logo.png" alt="TideEye logo" />
            <span>TideEye</span>
          </div>
          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="button button--ghost"
            onClick={() => setExperienceOpen(true)}
          >
            Experience
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <ProblemSection />
        <div className="section-separator" aria-hidden="true" />
        <SolutionSection />
        <div className="section-separator" aria-hidden="true" />
        <ExperienceTeaser onOpenExperience={() => setExperienceOpen(true)} />
        <div className="section-separator" aria-hidden="true" />
        <TryItSection />
        <div className="section-separator" aria-hidden="true" />
        <TeamSection />
        <div className="section-separator" aria-hidden="true" />
        <ContactSection />
        <div className="section-separator" aria-hidden="true" />
      </main>

      <footer className="site-footer">
        <div className="footer-divider" aria-hidden="true" />
        <div className="container footer-content">
          <div className="footer-brand">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="TideEye logo" />
            <span>TideEye</span>
          </div>
            <p className="footer-tagline">Intelligent insights for a cleaner coastline.</p>
            <p className="footer-legal">© {year} TideEye. All rights reserved.</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            {footerNavItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <div>
              <p className="footer-contact-label">Email</p>
              <a href="mailto:team@tideeye.ai">team@tideeye.ai</a>
            </div>
            <div>
              <p className="footer-contact-label">Location</p>
              <span>Chennai, India</span>
            </div>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
              <a href="#" aria-label="GitHub">
                <span>GitHub</span>
              </a>
              <a href="mailto:team@tideeye.ai" aria-label="Email">
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div id="experience" aria-hidden="true" />
      <ExperienceOverlay isOpen={isExperienceOpen} onClose={() => setExperienceOpen(false)} />
    </>
  )
}

export default App
