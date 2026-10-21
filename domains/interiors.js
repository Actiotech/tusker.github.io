// Interiors: an interior studio's enquiry desk. The default domain, and the
// reference for writing a new one (see README.md in this directory).
(window.TUSKER_DOMAINS = window.TUSKER_DOMAINS || {}).interiors = {
  story: {
    eyebrow: 'An enquiry, run from WhatsApp',
    title: "Out of three people's phones, onto one record.",
    note: "Demo: an interior studio's enquiry desk.",
    phone: "Anita's phone · Coordinator",
    board: {
      title: 'Enquiry board',
      flow: 'Enquiry workflow',
      card: 'ENQ-412 · 2BHK interiors',
      client: 'Leena · Referral',
      stages: ['New', 'Contacted', 'Site Measured', 'Design Shared', 'Quote Sent'],
      empty: 'Not logged yet',
    },
    scenes: [
      {
        title: 'Logged in a few replies',
        body: 'Anita logs a referral by voice note. Tusker catches a repeat number and tells Vishnu to call.',
        chat: [
          ['day', 'Thursday'],
          ['me', '🎙 0:03', '11:38'],
          ['bot', 'Summary?', '11:38'],
          ['me', '2BHK interiors - Leena', '11:39'],
          ['bot', 'Customer Number?', '11:39'],
          ['me', '90000 12345', '11:40'],
          ['bot', 'This number is already on enquiry ENQ-390. Send a different number. Customer Number?', '11:40'],
          ['me', '90000 54321', '11:40'],
          ['bot', 'Create enquiry?\n• Summary: 2BHK interiors - Leena\n• Customer Number: +919000054321\n• Source: Referral', '11:41', 'Create · Cancel'],
          ['me', 'Create', '11:42'],
          ['bot', 'Task ENQ-412 created.', '11:42'],
          ['stage', 'New'],
        ],
      },
      {
        title: 'Still waiting at 5 pm? Just ask.',
        body: 'The owner asks which enquiries are still new and gets the list, without phoning the desk.',
        chat: [
          ['day', 'Thursday, 5 pm'],
          ['who', "Mathew's phone · Owner"],
          ['me', '🎙 0:03', '17:05'],
          ['bot', 'These enquiries are still new:\n1. ENQ-412 - 2BHK interiors - Leena\n2. ENQ-409 - Villa kitchen - Shaji', '17:05'],
        ],
      },
      {
        title: 'Each call and visit moves it on',
        body: 'Vishnu moves the enquiry on by voice after the call, then saves his site note. One tap on Confirm each.',
        chat: [
          ['day', 'Friday'],
          ['who', "Vishnu's phone · Designer"],
          ['me', '🎙 0:05', '09:20'],
          ['bot', 'Change ENQ-412 from new to contacted?', '09:20', 'Confirm · Cancel'],
          ['me', 'Confirm', '09:20'],
          ['stage', 'Contacted'],
          ['day', 'Saturday'],
          ['me', '🎙 0:09', '12:02'],
          ['bot', 'Add this note to ENQ-412: "Flat measured. 3 bedrooms, false ceiling in hall. Quote full interiors."?', '12:02', 'Confirm · Cancel'],
          ['me', 'Confirm', '12:02'],
          ['stage', 'Site Measured'],
        ],
      },
      {
        title: 'The owner hears what matters',
        body: "One message when the measurement is done. Vishnu's note is a question away.",
        chat: [
          ['who', "Mathew's phone · Owner"],
          ['notify', 'Mathew'],
          ['bot', 'Update on a task you watch:\nTask: ENQ-412 — 2BHK interiors - Leena\nUpdated by: Vishnu\nChange: Measurement done. Design is next.\n- Tusker', '12:04'],
          ['me', '🎙 0:03', '18:10'],
          ['bot', 'Comments on ENQ-412:\n\nVishnu (6 hours ago): Flat measured. 3 bedrooms, false ceiling in hall. Quote full interiors.', '18:10'],
        ],
      },
    ],
  },
};
