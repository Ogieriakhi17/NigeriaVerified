import { createClient } from '@supabase/supabase-js'
console.log('Script starting...')
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const facts = [
    // --- VOTING PROCESS ---
    {
      claim: 'You can vote without your PVC if you have your National ID card',
      verdict: 'FALSE',
      explanation: 'The Permanent Voter Card (PVC) or a downloadable copy is the only accepted document for voting in Nigerian elections. No other ID card, including the National ID, drivers license, or international passport, can substitute for a PVC at the polling unit.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'You can vote at any polling unit in your state even if it is not where you registered',
      verdict: 'FALSE',
      explanation: 'You must vote at the specific polling unit where you registered. Your PVC is tied to that exact location. Showing up at a different polling unit even in the same local government means you cannot be accredited.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'Voting in Nigerian elections starts at 8:00am',
      verdict: 'FALSE',
      explanation: 'While polling officials arrive at 8:00am to set up and display materials, accreditation and voting officially commence at 8:30am. The first 30 minutes (8:00am - 8:30am) are for preparation, introduction of officials, and display of the empty ballot box.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'Voting closes at 2:30pm and anyone not on the queue by then cannot vote',
      verdict: 'FALSE',
      explanation: 'Voting officially closes at 2:30pm, BUT any voter already on the queue by 2:30pm must be allowed to accredit and vote. Security personnel stand behind the last voter on the queue at 2:30pm to prevent new people from joining, but those already in line are permitted to vote.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'Pregnant women, nursing mothers, elderly persons, and PWDs have priority voting access',
      verdict: 'TRUE',
      explanation: 'The guidelines explicitly state that Persons with Disabilities (PWDs), visibly pregnant women, nursing or breastfeeding mothers, and the elderly shall be granted priority access to voting at polling units. They are also entitled to a separate queue.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'You can use your phone to take pictures inside the voting cubicle',
      verdict: 'FALSE',
      explanation: 'Telephones and other electronic devices capable of taking pictures are strictly prohibited in voting cubicles. Voters must remove any cell phone or photographic device from their possession before proceeding to the voting cubicle.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'A voter who accidentally spoils their ballot paper can get a replacement',
      verdict: 'TRUE',
      explanation: 'If a voter accidentally spoils their ballot paper such that it cannot be used, they may present it to the Presiding Officer. If satisfied, the Presiding Officer must issue another ballot paper and mark the spoiled one as "cancelled".',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'A voter can be accompanied by a friend to assist in voting if they are visually impaired',
      verdict: 'TRUE',
      explanation: 'A voter who is visually impaired or has other forms of disability may be accompanied into the polling unit and assisted by a person of their choice. However, that person cannot be an Election Official, polling agent, or security personnel on election duty.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'If your BVAS fails to authenticate your fingerprint, you can still vote by showing your PVC',
      verdict: 'FALSE',
      explanation: 'If a voter cannot be identified by BVAS after three trials of fingerprint or facial recognition, the voter shall NOT be allowed to vote. The guidelines explicitly state this constitutes "Failed Accreditation" and the voter must be turned away.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'Polling Units can be located in palaces of traditional rulers and private homes',
      verdict: 'FALSE',
      explanation: 'The guidelines explicitly prohibit locating polling units in places of worship, palaces of traditional rulers, and private homes. Polling units must be in public places such as public schools, civic centres, town halls, and communal open spaces.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'If you present someone else\'s PVC to vote, you are liable to arrest and prosecution',
      verdict: 'TRUE',
      explanation: 'Any person who presents the PVC of another person with the intention to use it to vote shall not be allowed to vote and is liable to arrest and prosecution. This constitutes impersonation and is a serious electoral offense.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'After voting, you must leave the polling unit immediately',
      verdict: 'FALSE',
      explanation: 'After casting their ballot, the voter is free to remain within the vicinity of the polling unit to witness the sorting and counting of votes and the announcement of results, provided they are orderly. They are not required to leave immediately.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'A voter must thumbprint their ballot paper using the ink provided',
      verdict: 'TRUE',
      explanation: 'The guidelines state that "A voter shall thumb mark his/her ballot paper using the ink provided" in the voting cubicle. After thumbprinting, while still in the cubicle, the voter folds the marked ballot paper and drops it in the ballot box.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'A voter who makes a mark on the ballot paper that identifies them can still have their vote counted',
      verdict: 'FALSE',
      explanation: 'A voter shall not make any mark on the ballot paper by which they may be identified. If they do so, such ballot paper shall be rejected. However, any print resulting from the staining of the fingerprint of the voter in the voting cubicle is not considered a mark of identification.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
  
    // --- BVAS & TECHNOLOGY ---
    {
      claim: 'BVAS stands for Bimodal Voter Accreditation System',
      verdict: 'TRUE',
      explanation: 'BVAS is the electronic device approved and deployed by INEC for the accreditation and authentication of voters through fingerprint and facial recognition technology. It also transmits polling unit results to the IReV portal.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'If a polling unit has more than 1,250 voters, multiple BVAS devices may be deployed',
      verdict: 'TRUE',
      explanation: 'Where a polling unit has more than 1,250 registered voters above the specified threshold determined by the Commission, more than one BVAS may be deployed for accreditation. Voters are assigned to each BVAS using the first alphabet of their surnames.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'If BVAS malfunctions, the election is automatically cancelled',
      verdict: 'FALSE',
      explanation: 'If BVAS malfunctions, the Presiding Officer must suspend accreditation and voting until a replacement BVAS is made available. If a replacement is not available by 2:30pm, accreditation and voting continue the following day. The election is not automatically cancelled.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'The BVAS transmits scanned copies of Form EC8A to the IReV Portal',
      verdict: 'TRUE',
      explanation: 'On completion of all polling unit voting and results procedures, the Presiding Officer uses the BVAS to electronically transmit a scanned copy of the result of the polling unit (Form EC8A, EC8A(I), or EC8A(II)) to the IReV portal.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
    {
      claim: 'If electronic transmission of results to IReV fails, the election results are invalid',
      verdict: 'FALSE',
      explanation: 'If transmission to IReV fails, the Presiding Officer notifies all present, explains the challenge, and includes the failure in their report. The Form EC8A signed and stamped by the Presiding Officer serves as the primary source of collation. The results remain valid.',
      source_url: 'https://inec.gov.ng',
      category: 'voting_process'
    },
  
    // --- ELECTION RESULTS & COLLATION ---
    {
      claim: 'Form EC8A is the result sheet for a polling unit',
      verdict: 'TRUE',
      explanation: 'Form EC8A series is the official form used to record the results of an election at the polling unit level. It contains the votes scored by each political party/candidate at that specific polling unit and serves as the building block for all higher-level collation.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
    {
      claim: 'The Presiding Officer is required to paste Form EC60E (Publication of Result Poster) at the polling unit',
      verdict: 'TRUE',
      explanation: 'After completing Form EC8A and transmitting it electronically, the Presiding Officer must complete and paste the Publication of Result Poster (Form EC60E) conspicuously at the polling unit. Failure to do so amounts to dereliction of duty and may result in prosecution.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
    {
      claim: 'If a polling agent refuses to countersign a result sheet, the result becomes invalid',
      verdict: 'FALSE',
      explanation: 'Refusal by any candidate or polling agent to countersign the appropriate Form EC8A series shall NOT invalidate the result of the polling unit. The form must still be signed by the Presiding Officer and the result stands.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
    {
      claim: 'If the number of votes cast exceeds the number of accredited voters (over-voting), the polling unit result is cancelled',
      verdict: 'TRUE',
      explanation: 'Where the total number of votes cast exceeds the number of accredited voters, the result of the election for that polling unit shall be cancelled. A supplementary election will be conducted in that polling unit before a return can be made.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
    {
      claim: 'A recount of votes can be requested by a polling agent more than once',
      verdict: 'FALSE',
      explanation: 'The Presiding Officer shall allow a recount of votes on demand by a candidate or polling agent, provided that such a recount shall only be allowed once. Multiple recounts are not permitted under the guidelines.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
    {
      claim: 'Ballot papers without the official mark (stamp, signature, date) cannot be counted',
      verdict: 'TRUE',
      explanation: 'Only ballot papers with the official mark and stamp prescribed by the Commission shall be counted. The official marks include the official stamp, signature and date, as well as the serial number of the booklet on the ballot paper.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
    {
      claim: 'Rejected ballot papers can be counted if there is a tie in the election',
      verdict: 'TRUE',
      explanation: 'While rejected ballot papers are generally not counted, they may be counted by a returning officer where there is a tie in order to make a return. This is allowed only if the ballot paper(s) were from the booklet of ballot papers used and have a serial number.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
    {
      claim: 'Form EC8E is the final declaration of results for an election',
      verdict: 'TRUE',
      explanation: 'Form EC8E is the official declaration of result form used at the highest level of collation for an election. For Presidential elections, the Chief Electoral Commissioner uses Form EC8E to declare the winner. For Governorship, it is used by the State Collation/Returning Officer.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
  
    // --- MARGIN OF LEAD PRINCIPLE ---
    {
      claim: 'If the margin of lead is greater than the number of affected PVCs, the election winner can be declared immediately',
      verdict: 'TRUE',
      explanation: 'Where the margin of lead between the two leading candidates exceeds the total number of PVCs collected in polling units where elections were postponed, voided, or not held, the Returning Officer can make a return without conducting a supplementary election. The outcome cannot be affected.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
    {
      claim: 'The Margin of Lead Principle applies only to Presidential elections',
      verdict: 'FALSE',
      explanation: 'The Margin of Lead Principle applies to all elections conducted by INEC, including Presidential, Governorship, Senatorial, Federal Constituency, and State Constituency elections. It is used to determine if supplementary elections are necessary in affected polling units.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
    {
      claim: 'If there is resistance to the use of BVAS, the affected polling units are credited with zero votes',
      verdict: 'TRUE',
      explanation: 'Where there is willful obstruction or resistance to the use of the BVAS or any electoral device deployed by the Commission, the affected polling units shall be credited with zero votes and shall not count in the application of the Margin of Lead principle.',
      source_url: 'https://inec.gov.ng',
      category: 'results'
    },
  
    // --- POSTPONEMENT & SUPPLEMENTARY ELECTIONS ---
    {
      claim: 'Elections can be postponed due to serious breach of the peace, natural disasters, or other emergencies',
      verdict: 'TRUE',
      explanation: 'INEC is empowered to postpone elections in one or more polling units in the event of serious breach of the peace, natural disasters, or other emergencies. This is in line with Section 24 of the Electoral Act 2026.',
      source_url: 'https://inec.gov.ng',
      category: 'postponement_supplementary'
    },
    {
      claim: 'A supplementary election must be held within 7 days of the main election',
      verdict: 'FALSE',
      explanation: 'The guidelines do not specify a fixed number of days for conducting supplementary elections. The Commission fixes a date for supplementary elections as appropriate. The focus is on ensuring polls are conducted in affected polling units before a return is made.',
      source_url: 'https://inec.gov.ng',
      category: 'postponement_supplementary'
    },
    {
      claim: 'If an election is postponed due to BVAS failure, a supplementary election is scheduled within 24 hours',
      verdict: 'TRUE',
      explanation: 'Where an election is postponed due to the non-replacement of faulty BVAS, a new election shall be scheduled within 24 hours. A return for the constituency shall not be made until polls are conducted in the affected polling units.',
      source_url: 'https://inec.gov.ng',
      category: 'postponement_supplementary'
    },
    {
      claim: 'A supplementary election is conducted only if the margin of lead is less than the number of affected PVCs',
      verdict: 'TRUE',
      explanation: 'A supplementary election is conducted when the margin of lead between the two leading candidates is NOT in excess of the total number of voters who collected their PVCs in polling units where elections were postponed, voided, or not held.',
      source_url: 'https://inec.gov.ng',
      category: 'postponement_supplementary'
    },
  
    // --- CANDIDATES & POLITICAL PARTIES ---
    {
      claim: 'A political party can appoint only one polling agent per polling unit',
      verdict: 'TRUE',
      explanation: 'A candidate in consultation with their political party may appoint one person as their polling agent for each polling unit. They can also appoint one polling agent for each collation centre and one representative at each point of distribution of electoral materials.',
      source_url: 'https://inec.gov.ng',
      category: 'candidates_parties'
    },
    {
      claim: 'A sitting governor or minister can serve as a polling agent for their party',
      verdict: 'FALSE',
      explanation: 'No person shall be qualified to serve as a polling agent if they are a serving Governor, Deputy Governor, Commissioner, Minister, or holding any elective or appointive political office. They must have resigned at least three months before the election.',
      source_url: 'https://inec.gov.ng',
      category: 'candidates_parties'
    },
    {
      claim: 'A political party must submit the list of polling agents at least 14 days before the election',
      verdict: 'TRUE',
      explanation: 'The notice appointing polling agents must be submitted to the Resident Electoral Commissioner through the Electoral Officer at least 14 days to the election. It must contain the names, addresses, contact details, passport photographs, and sample signatures of the agents.',
      source_url: 'https://inec.gov.ng',
      category: 'candidates_parties'
    },
    {
      claim: 'Political parties are allowed to inspect sample electoral materials before the election',
      verdict: 'TRUE',
      explanation: 'The Commission shall make available samples of relevant electoral materials for inspection by political parties. Parties are invited to confirm their identity on sample materials. Failure to inspect or approve within two days is deemed approval.',
      source_url: 'https://inec.gov.ng',
      category: 'candidates_parties'
    },
  
    // --- DISPUTES & REVIEWS ---
    {
      claim: 'INEC has the power to review a declaration or return made under duress',
      verdict: 'TRUE',
      explanation: 'Section 65 of the Electoral Act 2026 empowers INEC to review declarations/returns made under duress or contrary to law. The Chairman convenes an emergency session to consider reports. An Election Review Committee may be established to investigate and make recommendations.',
      source_url: 'https://inec.gov.ng',
      category: 'disputes_reviews'
    },
    {
      claim: 'If a declaration is under review, INEC can still issue a Certificate of Return',
      verdict: 'FALSE',
      explanation: 'When a declaration/return is under review, INEC shall withhold the publication of the result and the issuance of a Certificate of Return to the candidate declared the winner until the conclusion of the review. The constituency is marked "Under Review" on the published results.',
      source_url: 'https://inec.gov.ng',
      category: 'disputes_reviews'
    },
    {
      claim: 'The Election Review Committee must complete its investigation within four days',
      verdict: 'TRUE',
      explanation: 'When the Commission establishes an Election Review Committee, it gives the Committee a maximum of four days to complete the investigation and submit its report. The Committee can co-opt staff and call for evidence or witnesses.',
      source_url: 'https://inec.gov.ng',
      category: 'disputes_reviews'
    },
  
    // --- GENERAL PROVISIONS ---
    {
      claim: 'INEC can conduct elections outside of the scheduled General Election period (off-cycle elections)',
      verdict: 'TRUE',
      explanation: 'Off-cycle elections are held outside the timetable for a General Election. Governorship elections, for example, are held on the Saturday following the 100th day to the end of the tenure of the incumbent, or as determined by the Commission.',
      source_url: 'https://inec.gov.ng',
      category: 'general_provisions'
    },
    {
      claim: 'If a presidential election is uncontested, the Commission follows the procedure in Section 133 of the Constitution',
      verdict: 'TRUE',
      explanation: 'For uncontested elections, the Commission follows the procedure outlined in the Constitution. For a Presidential election, this is Section 133 of the Constitution of the Federal Republic of Nigeria, 1999 (as amended).',
      source_url: 'https://inec.gov.ng',
      category: 'general_provisions'
    },
    {
      claim: 'Every polling unit must have one Presiding Officer and three Assistant Presiding Officers',
      verdict: 'TRUE',
      explanation: 'Each polling unit shall have a Presiding Officer (PO) and three Assistant Presiding Officers (APOs): APO I (designated as Poll Clerk), APO II, and APO III. Additional APOs may be appointed if multiple BVAS devices are deployed.',
      source_url: 'https://inec.gov.ng',
      category: 'general_provisions'
    },
    {
      claim: 'The Presiding Officer must open and display the empty ballot box before voting begins',
      verdict: 'TRUE',
      explanation: 'Between 8:00am and 8:30am, the Presiding Officer shall open and display the empty ballot box and confirm to all persons present that the BVAS accreditation data is zero before commencement of accreditation and voting. Thereafter, they close and seal the ballot box.',
      source_url: 'https://inec.gov.ng',
      category: 'general_provisions'
    },
    {
      claim: 'For a Governorship election, a candidate must have at least one-quarter of the votes in at least two-thirds of all LGAs in the State',
      verdict: 'TRUE',
      explanation: 'For a Governorship election, the winning candidate must have the majority of votes cast AND not less than one-quarter of the votes cast in each of at least two-thirds of all the LGAs in the State. If no candidate meets this requirement, a run-off election is held within 21 days.',
      source_url: 'https://inec.gov.ng',
      category: 'general_provisions'
    }
  ];

async function seed() {
  console.log(`Seeding ${facts.length} facts into claims_database...`)

  const { error } = await supabase
    .from('claims_database')
    .insert(facts)

  if (error) {
    console.error('Seed failed:', error)
    process.exit(1)
  }

  console.log(`Successfully seeded ${facts.length} facts!`)
  process.exit(0)
}

seed()