# Nevertheless Press Editorial Workflow

Nevertheless Press should not start from a blank page every time. The whole point of the system is to move from living source material to a published issue without losing Samuel's voice or the magazine art.

That means each issue needs five core artifacts before it is publishable:

1. `Transcript`
2. `Issue brief`
3. `Editorial draft`
4. `Magazine art brief`
5. `Published issue`

The transcript gives you the raw material. The brief replaces the raw transcript as the working document. The published issue is the final interpretation, not a transcription job with better spacing.

## The Pipeline

The first stage is source capture. Sermon audio goes through `transcribeIG`, which produces a corrected transcript and structured sermon notes. That system stays internal. It is not part of the public publication, but it is the engine that keeps the publication supplied.

The second stage is the issue brief. This is where the sermon stops being a sermon transcript and starts becoming editorial material. The brief should identify the core thesis, the strongest lines, the main tensions, the scripture references, the practical applications, and the questions Samuel still needs to answer in his own words.

The third stage is the Samuel pass. This matters because the quality failure is already known: polished devotional filler can sound fine and still not sound like Samuel. Before any full draft is written, Samuel should add a short pass of raw reflections, specific phrasing, objections, and concrete lines he actually wants to keep.

The fourth stage is the editorial draft. This is where the publication copy gets written. The goal is not to preserve every good point from the sermon. The goal is to make one sharp piece that says one clear thing well.

The fifth stage is art direction. Design comes after the editorial center is clear. Decide the visual mood only after the issue knows what it is. A dark, severe issue should not share the same spread logic as a lighter or more reflective one. The house style stays consistent, but the spreads should respond to the material. Use `docs/magazine-art-direction.md` before designing or building an issue page.

The sixth stage is build and review. Add metadata, slug, issue component, archive entry, and social line. Then review the issue against three questions:

1. Does this sound like Samuel?
2. Does this say one clear thing?
3. Does the design deepen the message instead of distracting from it?

The seventh stage is publish. Deploy, share, archive, and move on. The point is rhythm, not perfection paralysis.

## Monthly Rhythm

Five publications a month is realistic if the month has different weights inside it.

Use this rhythm:

1. Week 1: sermon-derived issue
2. Week 2: sermon-derived issue
3. Week 3: sermon-derived issue
4. Week 4: sermon-derived issue
5. End of month: one shorter letter or notebook piece from Samuel

That split matters because it prevents every publication from needing flagship-level art direction. Four can come from the sermon pipeline. One can be lighter, more personal, and faster to publish.

## Ownership Per Stage

`transcribeIG` owns transcript generation and sermon-note structure.

The issue brief owns editorial selection. This is where material is reduced to the lines, tensions, and questions that are actually worth publishing.

Samuel owns the voice lock. If the issue does not contain his own lines, it is too easy for the copy to become polished but generic.

The publication build owns presentation. This is where the brief becomes a page with a slug, metadata, archive placement, and art direction.

## Exit Criteria

An issue is ready only when all of these are true:

1. It has a completed brief.
2. Samuel has added a voice pass.
3. The copy has a clear thesis.
4. The issue metadata is complete.
5. The magazine art brief is complete.
6. The page builds cleanly.
7. The issue feels like a publication, not a sermon dump.

## Working Rule

Preserve the magazine art first. Systematize around it second. Reusable structure is useful only if it does not flatten the publication into a generic blog.
