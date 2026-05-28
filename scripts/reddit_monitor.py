#!/usr/bin/env python3
"""
Find Reddit threads worth reviewing for Peptide Central outreach.

This script intentionally does not auto-post. It prints search URLs and draft
reply hints so a human can check subreddit rules before commenting.
"""

from urllib.parse import quote_plus

KEYWORDS = [
    "BPC-157 India",
    "TB-500 India",
    "GHK-Cu India",
    "Retatrutide India",
    "peptides India",
    "buy peptides India",
    "peptide source India",
    "COA peptide India",
    "HPLC peptide India",
]

SUBREDDITS = [
    "IndianGymRats",
    "Fitness_India",
    "indianfitness",
    "AskFitnessIndia",
]


def main():
    print("Reddit outreach review queue")
    print("Check subreddit rules before replying. Disclose affiliation.\n")

    for subreddit in SUBREDDITS:
        print(f"r/{subreddit}")
        for keyword in KEYWORDS:
            query = quote_plus(keyword)
            url = f"https://www.reddit.com/r/{subreddit}/search/?q={query}&restrict_sr=1&sort=new"
            print(f"- {keyword}: {url}")
        print()

    print("Suggested first reply type:")
    print("- If sourcing question: use 'Source Request' draft.")
    print("- If quality question: use 'Quality Check Thread' draft.")
    print("- If competitor comparison: use 'BioPeptide / Competitor Comparison Thread' draft.")


if __name__ == "__main__":
    main()
