"""A small local web front end: ``mbaguru serve``. Standard library only."""

from mbaguru.web.api import ApiError, call, check_answer
from mbaguru.web.server import make_server

__all__ = ["ApiError", "call", "check_answer", "make_server"]
