"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";
type ShareStatus = "idle" | "done" | "error";

type FormCopy = {
  honeypot: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  restaurant: string;
  restaurantPlaceholder: string;
  googleUrl: string;
  googleUrlPlaceholder: string;
  problem: string;
  problemPlaceholder: string;
  submit: string;
  submitting: string;
  privacy: string;
  success: string;
  shareLabel: string;
  shareDescription: string;
  share: string;
  shared: string;
  shareText: string;
  shareError: string;
  error: string;
};

export function LeadForm({ copy, locale }: { copy: FormCopy; locale: "pl" | "en" }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [shareStatus, setShareStatus] = useState<ShareStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setShareStatus("idle");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  async function handleShare() {
    const url = `${window.location.origin}${window.location.pathname}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "ReviewGuard",
          text: copy.shareText,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
      }

      setShareStatus("done");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setShareStatus("error");
    }
  }

  return (
    <form
      className="border border-[#17211c] bg-[#fffdf7] p-5 shadow-[10px_10px_0_#17211c]"
      onSubmit={handleSubmit}
    >
      <input name="locale" type="hidden" value={locale} />

      <label className="absolute -left-[9999px]" aria-hidden="true">
        {copy.honeypot}
        <input autoComplete="off" name="website" tabIndex={-1} type="text" />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          {copy.name}
          <input
            className="border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
            name="name"
            placeholder={copy.namePlaceholder}
            required
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {copy.email}
          <input
            className="border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
            name="email"
            placeholder={copy.emailPlaceholder}
            required
            type="email"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-semibold">
        {copy.restaurant}
        <input
          className="border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
          name="restaurant"
          placeholder={copy.restaurantPlaceholder}
          required
          type="text"
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-semibold">
        {copy.googleUrl}
        <input
          className="border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
          name="googleUrl"
          placeholder={copy.googleUrlPlaceholder}
          required
          type="url"
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-semibold">
        {copy.problem}
        <textarea
          className="min-h-32 resize-y border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
          name="problem"
          placeholder={copy.problemPlaceholder}
          required
        />
      </label>

      <button
        className="mt-5 w-full rounded-sm bg-[#17211c] px-6 py-4 text-sm font-bold text-[#f7f2e8] transition hover:bg-[#2e3b34] disabled:cursor-wait disabled:opacity-60"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? copy.submitting : copy.submit}
      </button>

      <p className="mt-4 text-sm leading-6 text-[#657068]">
        {copy.privacy}
      </p>
      <div aria-live="polite">
        {status === "success" ? (
          <div className="mt-4 border border-[#17211c]/15 bg-[#d6f36a]/25 p-4">
            <p className="text-sm font-semibold text-[#17211c]">
              {copy.success}
            </p>
            <div className="mt-4 border-t border-[#17211c]/15 pt-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#657068]">
                {copy.shareLabel}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#526157]">
                {copy.shareDescription}
              </p>
              <button
                className="mt-3 border border-[#17211c] px-4 py-2 text-sm font-semibold transition hover:bg-[#17211c] hover:text-[#f7f2e8]"
                onClick={handleShare}
                type="button"
              >
                {shareStatus === "done"
                  ? copy.shared
                  : copy.share}
              </button>
              {shareStatus === "error" ? (
                <p className="mt-2 text-sm font-semibold text-[#9f2d20]">
                  {copy.shareError}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-sm font-semibold text-[#9f2d20]">
            {copy.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
