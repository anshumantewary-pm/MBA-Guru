"""Exception hierarchy. The CLI catches ``MBAGuruError`` and nothing else."""

from __future__ import annotations


class MBAGuruError(Exception):
    """Base class for every error mbaguru raises on purpose."""


class ValidationError(MBAGuruError, ValueError):
    """An input value makes no sense for the calculation (e.g. negative units)."""


class UnknownNameError(MBAGuruError, KeyError):
    """A lookup by name (case id, model name) found nothing."""

    what = "name"

    def __str__(self) -> str:
        # KeyError wraps its message in quotes; show it plainly instead.
        return str(self.args[0]) if self.args else f"unknown {self.what}"


class UnknownCaseError(UnknownNameError):
    """A practice case id was not found in the registry."""

    what = "case"


class UnknownModelError(UnknownNameError):
    """A built-in analysis model name was not found."""

    what = "model"
