const questions = [
   
    
  
    { "question": "1. History can be defined as the attempt to study the past by?", "options": ["assumption", "education", "enquiring", "participation", "questioning"], "answer": "enquiring" },
    { "question": "2. One of the importance of history is that it teaches us to", "options": ["avoid mistakes of the past", "cooperate using traditional languages", "read widely", "showcase our cultural heritage", "visit important places"], "answer": "avoid mistakes of the past" },
    { "question": "3. History provides rich examples and illustration of successes from which societies might learn to be", "options": ["democratic", "industrious", "intelligent", "leaders", "patriotics"], "answer": "patriotics" },
    { "question": "4. The knowledge of the foundation of a society can be sourced from ", "options": ["culture", "government", "history", "politics", "warfare"], "answer": "history" },
    { "question": "5. One of the major tasks of a historian is to identify", "options": ["actors of past events", "eye witness accounts", "information on cultural foundation", "Cytoplasm", "Ribosome"], "answer": "Chloroplast" },
    { "question": "6. Which is the process by which plants make their food?", "options": ["Photosynthesis", "Respiration", "Digestion", "Fermentation", "Transpiration"], "answer": "Photosynthesis" },
    { "question": "7. Which of the following is a type of asexual reproduction?", "options": ["Binary fission", "Fertilization", "Mating", "Pollination", "Conjugation"], "answer": "Binary fission" },
    { "question": "8. What do we call the process by which plants lose water through their leaves?", "options": ["Transpiration", "Evaporation", "Absorption", "Respiration", "Photosynthesis"], "answer": "Transpiration" },
    { "question": "9. What is the main function of the roots of plants?", "options": ["Absorb water and nutrients", "Produce food", "Support the plant", "Help in photosynthesis", "Transport food"], "answer": "Absorb water and nutrients" },
    { "question": "10. Which of the following is a type of blood vessel?", "options": ["Artery", "Vein", "Capillary", "All of the above", "None of the above"], "answer": "All of the above" },
    { "question": "11. Which of the following gases do plants take in during photosynthesis?", "options": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen", "Argon"], "answer": "Carbon dioxide" },
    { "question": "12. What is the green pigment in plants that helps with photosynthesis?", "options": ["Chlorophyll", "Carotene", "Melanin", "Phytin", "Cyanin"], "answer": "Chlorophyll" },
    { "question": "13. What is the name of the process where organisms produce offspring?", "options": ["Reproduction", "Growth", "Development", "Mitosis", "Meiosis"], "answer": "Reproduction" },
    { "question": "14. In humans, what is the process that releases energy from food?", "options": ["Respiration", "Excretion", "Digestion", "Circulation", "Photosynthesis"], "answer": "Respiration" },
    { "question": "15. Which part of the plant absorbs sunlight?", "options": ["Leaf", "Root", "Stem", "Flower", "Seed"], "answer": "Leaf" },
    { "question": "16. Which structure in the cell is responsible for energy production?", "options": ["Mitochondria", "Nucleus", "Chloroplast", "Golgi body", "Endoplasmic reticulum"], "answer": "Mitochondria" },
    { "question": "17. What is the name of the structure that supports and protects the plant cell?", "options": ["Cell wall", "Cell membrane", "Nucleus", "Vacuole", "Chloroplast"], "answer": "Cell wall" },
    { "question": "18. What is the function of white blood cells?", "options": ["Fight infections", "Carry oxygen", "Control body temperature", "Produce insulin", "Carry nutrients"], "answer": "Fight infections" },
    { "question": "19. Which of the following is a function of the digestive system?", "options": ["Breaks down food", "Filters waste", "Pumps blood", "Regulates hormones", "Removes carbon dioxide"], "answer": "Breaks down food" },
    { "question": "20. Which organ in humans is responsible for filtering waste from the blood?", "options": ["Kidney", "Liver", "Lung", "Heart", "Stomach"], "answer": "Kidney" },
    { "question": "21. What do we call the tiny air sacs in the lungs where gas exchange happens?", "options": ["Alveoli", "Bronchi", "Trachea", "Capillaries", "Aorta"], "answer": "Alveoli" },
    { "question": "22. What is the name of the process by which cells divide to form two identical cells?", "options": ["Mitosis", "Meiosis", "Fertilization", "Respiration", "Fermentation"], "answer": "Mitosis" },
    { "question": "23. Which part of the human brain controls voluntary movements?", "options": ["Cerebrum", "Cerebellum", "Medulla", "Spinal cord", "Hypothalamus"], "answer": "Cerebrum" },
    { "question": "24. Which of the following is a function of the skeletal system?", "options": ["Support and protect the body", "Regulate temperature", "Produce hormones", "Digest food", "Fight infections"], "answer": "Support and protect the body" },
    { "question": "25. Which type of muscle is responsible for moving bones?", "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Voluntary muscle", "Involuntary muscle"], "answer": "Skeletal muscle" },
    { "question": "26. What is the primary function of the circulatory system?", "options": ["Transport oxygen and nutrients", "Digest food", "Regulate temperature", "Filter waste", "Absorb light"], "answer": "Transport oxygen and nutrients" },
    { "question": "27. What is the function of the cell membrane?", "options": ["Control what enters and exits the cell", "Produce energy", "Store genetic material", "Make proteins", "Break down food"], "answer": "Control what enters and exits the cell" },
    { "question": "28. In which part of the body does gas exchange occur?", "options": ["Lungs", "Stomach", "Liver", "Kidneys", "Heart"], "answer": "Lungs" },
    { "question": "29. What type of cell division results in four genetically different cells?", "options": ["Meiosis", "Mitosis", "Fertilization", "Cytokinesis", "Respiration"], "answer": "Meiosis" },
    { "question": "30. What is the name of the pigment that gives carrots their orange color?", "options": ["Carotene", "Chlorophyll", "Melanin", "Anthocyanin", "Xanthophyll"], "answer": "Carotene" },
    { "question": "31. What is the name of the process by which plants take in carbon dioxide and release oxygen?", "options": ["Photosynthesis", "Respiration", "Evaporation", "Transpiration", "Fermentation"], "answer": "Photosynthesis" },
    { "question": "32. Which of the following is an example of an herbivore?", "options": ["Cow", "Tiger", "Lion", "Eagle", "Shark"], "answer": "Cow" },
    { "question": "33. Which of the following is a function of the liver?", "options": ["Detoxify harmful substances", "Filter blood", "Produce insulin", "Regulate body temperature", "Store energy"], "answer": "Detoxify harmful substances" },
    { "question": "34. Which of the following are classified as vertebrates?", "options": ["Fish", "Amphibians", "Reptiles", "Mammals", "All of the above"], "answer": "All of the above" },
    { "question": "35. Which type of plant cell is responsible for transporting water and minerals?", "options": ["Xylem", "Phloem", "Parenchyma", "Collenchyma", "Sclerenchyma"], "answer": "Xylem" },
    { "question": "36. Which vitamin is obtained from sunlight?", "options": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin E", "Vitamin K"], "answer": "Vitamin D" },
    { "question": "37. Which gas do animals inhale for respiration?", "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen", "Argon"], "answer": "Oxygen" },
    { "question": "38. What do we call an organism that can make its own food?", "options": ["Autotroph", "Heterotroph", "Carnivore", "Herbivore", "Omnivore"], "answer": "Autotroph" },
    { "question": "39. What is the process by which plants release oxygen?", "options": ["Photosynthesis", "Respiration", "Fermentation", "Evaporation", "Transpiration"], "answer": "Photosynthesis" },
    { "question": "40. Which part of the human eye controls the amount of light that enters?", "options": ["Pupil", "Lens", "Retina", "Cornea", "Optic nerve"], "answer": "Pupil" },
    { "question": "41. What is the function of the vacuole in plant cells?", "options": ["Store water and nutrients", "Produce energy", "Control movement", "Break down food", "Control cell activity"], "answer": "Store water and nutrients" },
    { "question": "42. What is the process by which animals get rid of waste?", "options": ["Excretion", "Respiration", "Digestion", "Circulation", "Absorption"], "answer": "Excretion" },
    { "question": "43. What is the liquid part of the blood called?", "options": ["Plasma", "Red blood cells", "White blood cells", "Platelets", "Lymph"], "answer": "Plasma" },
    { "question": "44. What is the function of insulin in the body?", "options": ["Regulate blood sugar levels", "Fight infections", "Help in digestion", "Help in blood clotting", "Regulate body temperature"], "answer": "Regulate blood sugar levels" },
    { "question": "45. Which part of the brain controls breathing?", "options": ["Medulla", "Cerebrum", "Cerebellum", "Spinal cord", "Hypothalamus"], "answer": "Medulla" },
    { "question": "46. Which organ in the human body is responsible for producing bile?", "options": ["Liver", "Kidney", "Pancreas", "Lungs", "Stomach"], "answer": "Liver" },
    { "question": "47. What type of reproduction involves only one parent?", "options": ["Asexual reproduction", "Sexual reproduction", "Mating", "Fertilization", "Pollination"], "answer": "Asexual reproduction" },
    { "question": "48. What is the name of the process by which green plants make their food?", "options": ["Photosynthesis", "Respiration", "Digestion", "Fermentation", "Transpiration"], "answer": "Photosynthesis" },
    { "question": "49. What is the function of the mitochondria?", "options": ["Produce energy", "Make proteins", "Store genetic material", "Regulate hormones", "Absorb nutrients"], "answer": "Produce energy" },
    { "question": "50. What is the basic unit of heredity?", "options": ["Gene", "Cell", "Chromosome", "Protein", "DNA"], "answer": "Gene" },
    { "question": "51. Which of the following is an example of a producer?", "options": ["Grass", "Lion", "Rabbit", "Eagle", "Shark"], "answer": "Grass" },
    { "question": "52. Which of the following best describes an omnivore?", "options": ["Eats both plants and animals", "Eats only plants", "Eats only meat", "Eats decomposing organic matter", "Does not eat food"], "answer": "Eats both plants and animals" },
    { "question": "53. Which organ in the body is primarily responsible for absorbing nutrients?", "options": ["Small intestine", "Liver", "Stomach", "Pancreas", "Large intestine"], "answer": "Small intestine" },
    { "question": "54. What is the term for a group of similar cells that work together to perform a function?", "options": ["Tissue", "Organ", "System", "Organism", "Cell"], "answer": "Tissue" },
    { "question": "55. Which of the following is an example of an autotroph?", "options": ["Tree", "Lion", "Rabbit", "Shark", "Deer"], "answer": "Tree" },
    { "question": "56. Which type of blood cells fight infections?", "options": ["White blood cells", "Red blood cells", "Platelets", "Plasma", "Lymph"], "answer": "White blood cells" },
    { "question": "57. What is the name of the process by which organisms change over time?", "options": ["Evolution", "Mutation", "Adaptation", "Development", "Transpiration"], "answer": "Evolution" },
    { "question": "58. Which of the following is NOT a function of the skin?", "options": ["Regulate body temperature", "Produce oxygen", "Protect internal organs", "Excrete waste", "Sense environment"], "answer": "Produce oxygen" },
    { "question": "59. Which of the following is a function of the respiratory system?", "options": ["Take in oxygen", "Digest food", "Circulate blood", "Excrete waste", "Fight infections"], "answer": "Take in oxygen" },
    { "question": "60. What is the study of living organisms called?", "options": ["Biology", "Chemistry", "Physics", "Geography", "Botany"], "answer": "Biology" }
  
  
              
              
          
          
      
        
     
    


    // This is a  quiz of 60 Questions..
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 540; //Tests are to be completed within 7 minutes else you would be loggeed out 
  let timerInterval;
  
  const questionEl = document.getElementById("question");
  const optionsForm = document.getElementById("options-form");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  const timerEl = document.getElementById("timer");
  const scoreEl = document.getElementById("score");
  const progressEl = document.getElementById("progress");
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const seconds = String(timeLeft % 60).padStart(2, '0');
      timerEl.textContent = `⏳ ${minutes}:${seconds}`;
  
      if (timeLeft === 30) {
        alert("⚠️ 30 seconds left!");
      }
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showFinalResult("⏰ YOUR TIME IS UP!");
      }
    }, 1000);
  }
  /* This functionality loads the questions*/
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsForm.innerHTML = "";
  
    q.options.forEach((opt, index) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = opt;
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      optionsForm.appendChild(label);
    });
  
    progressEl.textContent = `${currentQuestion + 1} of ${questions.length}`;
  }
  
  nextBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name='option']:checked");
    if (!selected) return alert("Please select an option!");
  
    const userAnswer = selected.value;
    const correctAnswer = questions[currentQuestion].answer;
  
    if (userAnswer === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      clearInterval(timerInterval);
      showFinalResult("✅ TEST COMPLETED!");
    }
  
    scoreEl.textContent = `Score: ${score}`;
  });
  
  function showFinalResult(message) {
    questionEl.classList.add("hidden");
    optionsForm.classList.add("hidden");
    nextBtn.classList.add("hidden");
    progressEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
  
    resultEl.innerHTML = `<p>${message}</p><p>You have scored ${score} out of ${questions.length}</p>`;
  }
  
  function initQuiz() {
    loadQuestion();
    startTimer();
  }
  
  initQuiz();
  