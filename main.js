// Simulated data — community resources (array of objects)
var resources = [
  { title: "Free Lunch Boxes", type: "food", location: "Community Center", urgency: 3 },
  { title: "Urgent Medical Checkup", type: "health", location: "Clinic", urgency: 5 },
  { title: "Part-time Housekeeping Job", type: "job", location: "Downtown", urgency: 4 },
  { title: "Evening Coding Class", type: "education", location: "Library", urgency: 2 },
  { title: "Urgent Blood Donation", type: "health", location: "Main Hospital", urgency: 5 },
  { title: "Volunteer Tutoring", type: "education", location: "School", urgency: 1 },
  { title: "Job Fair", type: "job", location: "City Hall", urgency: 3 },
  { title: "Free Groceries", type: "food", location: "Food Bank", urgency: 4 }
];

// ----------------------------
// ✅ STEP 1: GROUP BY TYPE
// ----------------------------

// We'll use an object to group types
var groupedByType = {}; // e.g., { food: [..], job: [..] }

// Loop through the resources manually
for (var i = 0; i < resources.length; i++) {
  var current = resources[i];
  var type = current.type;

  // Check if that type already exists as a key
  if (groupedByType[type] === undefined) {
    // If not, create a new array for it
    groupedByType[type] = [];
  }

  // Push the current resource into the right group
  groupedByType[type][groupedByType[type].length] = current;
}

// Print grouped results
console.log("📦 Resources Grouped by Type:");
for (var key in groupedByType) {
  console.log("\nType:", key);
  var list = groupedByType[key];
  
  for (var j = 0; j < list.length; j++) {
    var item = list[j];
    console.log("- " + item.title + " (" + item.location + ") - urgency: " + item.urgency);
  }
}

// ----------------------------
// ✅ STEP 2: URGENCY 4 or 5
// ----------------------------

console.log("\n🚨 High Urgency Resources (4 or 5):");

for (var i = 0; i < resources.length; i++) {
  var res = resources[i];

  // If urgency is 4 or 5, print it
  if (res.urgency >= 4) {
    console.log("- " + res.title + " (" + res.type + ", " + res.location + ") - urgency: " + res.urgency);
  }
}
