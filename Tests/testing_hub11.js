function getSectionIdentifierText(type) {
  const sectionTitles = {
    "multiple_choice": "Multiple Choice Section",
/*    "special": "Special Paper 2 Section",
    "true_false": "True or False Section",
    "fill_in_the_blank": "Fill in the Blanks Section",*/
    // Add other types here
  };
  return sectionTitles[type] || "Section";
}