module.exports = {

"[project]/.next-internal/server/app/caseStudies/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}}),
"[project]/src/data/caseStudy.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "caseStudies": (()=>caseStudies)
});
const caseStudies = [
    {
        slug: "explenet-experiential-learning",
        title: "Empowering Experiential Learning Through Digitalization with Explenet",
        image: "/iot2.jpg",
        author: "Adilsha TP",
        date: "July 21, 2025",
        content: [
            {
                type: "paragraph",
                text: "The landscape of education and corporate training is rapidly evolving. Traditional methods—marked by static lectures and paper-based assessments—are becoming less effective in a dynamic and digital world. Learners now seek interactive, personalized, and flexible experiences that mirror real-world applications. In response, Mentric Technologies developed Explenet, a digital-first experiential learning platform designed for modern learners."
            },
            {
                type: "paragraph",
                text: "This case study explores a real-world problem in the education and training sector, its impact on learners and institutions, how we addressed it through Explenet, and the outcomes achieved."
            },
            {
                type: "heading",
                text: "The Problem"
            },
            {
                type: "bullets",
                items: [
                    "Inconsistent Trainer Availability: A shortage of qualified trainers limited high-quality delivery.",
                    "Low Engagement and High Dropout Rates: Traditional formats failed to keep students motivated.",
                    "Limited Progress Tracking: Lack of tools to monitor learner performance prevented timely interventions.",
                    "Scalability Issues: Expanding to new regions was resource-intensive and inefficient."
                ]
            },
            {
                type: "heading",
                text: "The Effect of the Problem"
            },
            {
                type: "bullets",
                items: [
                    "Significant drop in course completion rates.",
                    "Students unable to apply learned skills effectively.",
                    "Trainers overburdened with manual evaluations.",
                    "Scaling was unsustainable without quality compromise."
                ]
            },
            {
                type: "heading",
                text: "How We Tackled the Problem"
            },
            {
                type: "list",
                items: [
                    {
                        title: "Hybrid Learning Models",
                        description: "Transitioned the institute to hybrid formats with live Zoom sessions and self-paced content."
                    },
                    {
                        title: "Virtual Labs for Skill-Based Practice",
                        description: "Developed labs for areas like tailoring, electronics, and art for virtual simulations."
                    },
                    {
                        title: "Batch-Based Assessments and Evaluations",
                        description: "Enabled auto/manual evaluations tied to course modules."
                    },
                    {
                        title: "Tracking and Feedback Mechanisms",
                        description: "Progress dashboards and feedback loops kept learners and educators aligned."
                    },
                    {
                        title: "Trainer Empowerment Tools",
                        description: "Dashboards and automated tools eased trainer workload and improved engagement."
                    }
                ]
            },
            {
                type: "heading",
                text: "The Solution: Explenet as a Comprehensive Learning Platform"
            },
            {
                type: "list",
                items: [
                    {
                        title: "Hybrid Course Delivery",
                        description: "Live Zoom integration, asynchronous content, and downloadable materials supported flexible learning."
                    },
                    {
                        title: "Interactive Virtual Labs",
                        description: "Simulations with scheduling options offered hands-on experience in digital environments."
                    },
                    {
                        title: "Dynamic Assessment Engine",
                        description: "Auto and manual assessment formats with media support streamlined grading and feedback."
                    },
                    {
                        title: "Multi-Role Collaboration",
                        description: "Students, faculty, and admins accessed role-specific dashboards to collaborate effectively."
                    },
                    {
                        title: "Insightful Analytics and Dashboards",
                        description: "Real-time analytics enabled data-driven decision-making across the learning ecosystem."
                    }
                ]
            },
            {
                type: "heading",
                text: "Results and Impact"
            },
            {
                type: "bullets",
                items: [
                    "35% Increase in Course Completion Rates",
                    "50% Improvement in Assessment Scores",
                    "Reduced Administrative Workload for Trainers",
                    "Higher Student Engagement",
                    "Improved Readiness for Employment"
                ]
            },
            {
                type: "heading",
                text: "Conclusion: A Digital Leap Toward Experiential Education"
            },
            {
                type: "paragraph",
                text: "This case study highlights how a real-world challenge in education was addressed through technology-enabled experiential learning. Explenet not only modernized the institute’s training model, but enriched it—making learning inclusive, practical, and scalable."
            },
            {
                type: "paragraph",
                text: "At Mentric Technologies, we believe in platforms that drive meaningful change. Explenet is more than a product—it’s a catalyst for educational transformation. If you're an educator, organization, or business looking to revamp your training—let's connect."
            }
        ]
    }
];
}}),
"[project]/src/app/caseStudies/[slug]/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CaseStudyDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caseStudy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/caseStudy.js [app-rsc] (ecmascript)");
;
;
;
;
;
function CaseStudyDetail({ params }) {
    const caseStudy = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caseStudy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caseStudies"].find((b)=>b.slug === params.slug);
    if (!caseStudy) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#fefcfb] text-[#1f2937] px-4 py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1px_1fr] gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: caseStudy.image,
                            alt: caseStudy.title,
                            width: 800,
                            height: 400,
                            className: "rounded-xl mb-8 border border-[#e5e7eb] shadow-sm object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl font-bold mb-3 text-[#111827] leading-tight",
                            children: caseStudy.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 text-sm text-[#6b7280] flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "By",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-[#374151]",
                                            children: caseStudy.author
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d1d5db]",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: caseStudy.date
                                }, void 0, false, {
                                    fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 text-[17px] leading-relaxed text-[#374151]",
                            children: caseStudy.content.map((block, index)=>{
                                switch(block.type){
                                    case "paragraph":
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "whitespace-pre-line",
                                            children: block.text
                                        }, index, false, {
                                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                            lineNumber: 45,
                                            columnNumber: 21
                                        }, this);
                                    case "heading":
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl md:text-2xl font-semibold mt-8 text-[#2563eb] border-b border-gray-300 pb-1",
                                            children: block.text
                                        }, index, false, {
                                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                            lineNumber: 51,
                                            columnNumber: 21
                                        }, this);
                                    case "list":
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 mt-3",
                                            children: block.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[17px] font-semibold text-[#1f2937] mb-1",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                                            lineNumber: 63,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#4b5563]",
                                                            children: item.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                                            lineNumber: 66,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 25
                                                }, this))
                                        }, index, false, {
                                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                            lineNumber: 60,
                                            columnNumber: 21
                                        }, this);
                                    case "bullets":
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc list-inside space-y-2 pl-4 text-[#4b5563]",
                                            children: block.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: item
                                                }, i, false, {
                                                    fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                                    lineNumber: 78,
                                                    columnNumber: 25
                                                }, this))
                                        }, index, false, {
                                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                            lineNumber: 73,
                                            columnNumber: 21
                                        }, this);
                                    default:
                                        return null;
                                }
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:block w-full h-full border-r border-gray-200"
                }, void 0, false, {
                    fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "col-span-1 sticky top-20 h-fit bg-white border border-gray-200 rounded-xl shadow p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-[#111827] mb-4",
                            children: "More Case Studies"
                        }, void 0, false, {
                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-3 text-sm",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caseStudy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caseStudies"].map((b)=>{
                                const isActive = b.slug === params.slug;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/case-studies/${b.slug}`,
                                        className: `block px-3 py-2 rounded-md transition font-medium ${isActive ? "border border-purple-500 text-purple-700 bg-purple-50" : "text-[#374151] hover:text-[#2563eb]"}`,
                                        children: b.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                        lineNumber: 100,
                                        columnNumber: 7
                                    }, this)
                                }, b.slug, false, {
                                    fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                                    lineNumber: 99,
                                    columnNumber: 5
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/caseStudies/[slug]/page.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/caseStudies/[slug]/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/caseStudies/[slug]/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_0cea9f1a._.js.map